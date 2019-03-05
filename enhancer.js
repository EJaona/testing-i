const success = item => {
  if (typeof item != "object") {
    return "Need to pass in an object";
  } else {
    if (item.name && item.type && item.durability && item.enhancement >= 0) {
      if (
        typeof item.durability != "number" ||
        typeof item.enhancement != "number"
      ) {
        return "durability and enhancement both need to be numbers";
      } else {
        if (typeof item.name != "string" || typeof item.type != "string") {
          return "name and type need to be strings";
        } else {
          if (item.enhancement < 15 && item.durability < 25) {
            return "Can't enhance because durability is lower than 25";
          } else {
            const newItem = {
              ...item,
              enhancement: item.enhancement < 19 ? (item.enhancement += 1) : 20,
              name:
                item.enhancement == 20
                  ? `[PEN] ${item.name}`
                  : item.enhancement == 19
                  ? `[TET] ${item.name}`
                  : item.enhancement == 18
                  ? `[TRI] ${item.name}`
                  : item.enhancement == 17
                  ? `[DUO] ${item.name}`
                  : item.enhancement == 16
                  ? `[PRI] ${item.name}`
                  : `[+${item.enhancement}] ${item.name}`
            };
            console.log(newItem);
            return newItem;
          }
        }
      }
    } else {
      return "Item is missing required key value pair";
    }
  }
};

const fail = item => {
  if (typeof item != "object") {
    return "Need to pass in an object";
  } else {
    if (item.name && item.type && item.durability && item.enhancement >= 0) {
      if (
        typeof item.durability != "number" ||
        typeof item.enhancement != "number"
      ) {
        return "durability and enhancement both need to be numbers";
      } else {
        if (typeof item.name != "string" || typeof item.type != "string") {
          return "name and type need to be strings";
        } else {
          if (item.enhancement < 1) {
            return {
              ...item,
              enhancement: 0,
              durability:
                item.enhancement <= 14
                  ? (item.durability -= 5)
                  : (item.durability -= 10)
            };
          } else {
            const newItem = {
              ...item,
              durability:
                item.enhancement <= 14
                  ? (item.durability -= 5)
                  : (item.durability -= 10),
              enhancement:
                item.durability > 14 ? (item.enhancement -= 1) : null,
              name:
                item.enhancement == 20
                  ? `[PEN] ${item.name}`
                  : item.enhancement == 19
                  ? `[TET] ${item.name}`
                  : item.enhancement == 18
                  ? `[TRI] ${item.name}`
                  : item.enhancement == 17
                  ? `[DUO] ${item.name}`
                  : item.enhancement == 16
                  ? `[PRI] ${item.name}`
                  : `[+${item.enhancement}] ${item.name}`
            };
            console.log(newItem);
            return newItem;
          }
        }
      }
    } else {
      return "Item is missing required key value pair";
    }
  }
};

const repair = item => {
  if (typeof item != "object") {
    return "Need to pass in an object";
  } else {
    if (
      item.name &&
      item.type &&
      item.durability >= 0 &&
      item.enhancement >= 0
    ) {
      if (
        typeof item.durability != "number" ||
        typeof item.enhancement != "number"
      ) {
        return "durability and enhancement both need to be numbers";
      } else {
        if (typeof item.name != "string" || typeof item.type != "string") {
          return "name and type need to be strings";
        } else {
          return {
            ...item,
            durability: 100
          };
        }
      }
    } else {
      return "Item is missing required key value pair";
    }
  }
};

module.exports = {
  success,
  repair,
  fail
};
