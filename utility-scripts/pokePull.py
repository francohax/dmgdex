import requests
import json
import re

class Pokemon:
    def __init__(self, number, name, types, stats, abilities, moves):
        self.id = number
        self.name = name
        self.typing = types
        self.baseStats = stats
        self.abilities = abilities
        self.moves = moves

class Ability:
    def __init__(self, number, name, effect):
        self.id = number
        self.name = name
        self.description = effect

class Move:
    def __init__(self, number, name, power, accuracy, damageClass, pp, effect, moveType, priority, target):
        self.id = number
        self.name = name
        self.baseDamage = power
        self.accuracy = accuracy
        self.damageClass = damageClass
        self.pp = pp
        self.description = effect
        self.type = moveType
        self.priority = priority
        self.target = target

class Type:
    def __init__(self, number, name, typeDamageRelation):
        self.idx = number
        self.name = name
        self.typeDamageRelation = typeDamageRelation

class TypeDamageRelation:
    def __init__(self, doubleDamageTo, doubleDamageFrom, halfDamageTo, halfDamageFrom, normalDamageTo, normalDamageFrom):
        self.doubleDamageTo = doubleDamageTo
        self.doubleDamageFrom = doubleDamageFrom
        self.halfDamageTo = halfDamageTo
        self.halfDamageFrom = halfDamageFrom
        self.normalDamageTo = normalDamageTo
        self.normalDamageFrom = normalDamageFrom

def dig(obj, keys):
    v = {}
    for i in range(0, len(keys), +1):
        k = keys[i]
        if i == 0:
            v = obj[k]
        else:
            v = v[k]

    return v

def buildKeyValueList(items, listName, key, values, valueRe = "", invert = False):
    indexed = 'slot' in values or invert
    if indexed:
        kvList = []
    else:
        kvList = {}
    for i in items[listName]:
        k = i[key]["name"]
        v = dig(i, values)

        if valueRe:
            v = re.findall(valueRe, v)

        if isinstance(v, list):
            for i in v:
                if i:
                    v = i

        if indexed:
            entry = {}
            entry["idx"] = v
            entry["name"] = k
            kvList.append(entry)
        else:
            kvList[k] = v
    return kvList

def buildTypeRelationship(damage_relations, key):
    l = []
    for i in damage_relations[key]:
        l.append(i['name'])
    return l

baseApiUrl = "https://pokeapi.co/api/v2/"
total_pokemon = 151
total_abilities = 267
total_moves = 826

temp_total = 26

dataset = {}
dataset["pokemon"] = []
for i in range(1, total_pokemon+1, +1):
    response = requests.get(f"{baseApiUrl}pokemon/{i}").json()

    p = Pokemon(response['id'], \
                response['name'], \
                buildKeyValueList(response, 'types', 'type', ['slot']), \
                buildKeyValueList(response, 'stats', 'stat', ['base_stat']), \
                buildKeyValueList(response, 'abilities', 'ability', ['slot']), \
                buildKeyValueList(response, 'moves', 'move', ['move', 'url'], '(?<!v)\d*', True))

    dataset["pokemon"].append(p.__dict__)
    print(f"fetched {p.id} - {p.name}")
print("Pokemon fetch done...")

dataset["abilities"] = []
for i in range(1, temp_total, +1):
    response = requests.get(f"{baseApiUrl}ability/{i}").json()

    a = Ability(response['id'], \
                response['name'], \
                response['effect_entries'][1]['effect'])

    dataset["abilities"].append(a.__dict__)
    print(f"Fetched ability {a.id} - {a.name}")
print("Ability fetch done...")

dataset['moves'] = []
for i in range(1, temp_total, +1):
    response = requests.get(f"{baseApiUrl}move/{i}").json()

    m = Move(response["id"], \
             response['name'], \
             response['power'], \
             response['accuracy'], \
             response['damage_class']['name'], \
             response['pp'], \
             response['effect_entries'][0]['effect'], \
             response['type']['name'], \
             response['priority'], \
             response['target'])

    dataset["moves"].append(m.__dict__)
    print(f"Fetched move {m.id} - {m.name}")
print("Move fetch done...")

dataset["types"] = []
for i in range(1, 18+1, +1):
    response = requests.get(f"{baseApiUrl}type/{i}").json()

    dr = response['damage_relations']
    dd_to = buildTypeRelationship(dr, 'double_damage_to')
    dd_from = buildTypeRelationship(dr, 'double_damage_from')
    hd_to = buildTypeRelationship(dr, 'half_damage_to')
    hd_from = buildTypeRelationship(dr, 'half_damage_from')
    n_to = buildTypeRelationship(dr, 'no_damage_to')
    n_from = buildTypeRelationship(dr, 'no_damage_from')

    tdr = TypeDamageRelation(dd_to, dd_from, \
             hd_to, hd_from, \
             n_to, n_from)

    t = Type(response['id'], response['name'], tdr.__dict__)
    dataset["types"].append(t.__dict__)

    print(f"Fetched type {t.idx} - {t.name}")
print("Type fetch done...")

json_dump = json.dumps(dataset, indent = 4)
with open("./data.json", "w") as outfile:
    outfile.write(json_dump)
print("ALL DONE")
