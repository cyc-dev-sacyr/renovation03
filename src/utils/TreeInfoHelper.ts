import { ITreeInfo } from "../models";

export class TreeInfoHelper {

  public static GetTreeLine(treeList: ITreeInfo[], id: string): ITreeInfo[] {
    for (let tree of treeList) {
      if (tree.id == id)
        return [tree];
      if (tree.items && tree.items.length > 0) {
        for (let treeChild of tree.items) {
          let treeLine: ITreeInfo[] = TreeInfoHelper.GetTreeLine([treeChild], id);
          if (treeLine.length > 0) {
            treeLine.push(tree);
            return treeLine;
          }
        }
      }
    }
    return [];
  }

  public static FindTreeLine(location: ITreeInfo, id: string): ITreeInfo {
    if (location && location.id && location.id == id)
      return location;
    if (location.items && location.items.length > 0) {
      for (let child of location.items) {
        let locationChild: ITreeInfo = TreeInfoHelper.FindTreeLine(child, id);
        if (locationChild) {
          return locationChild;
        }
      }
    }
    return null;
  }

  public static FindTreeLineName(location: ITreeInfo, title: string): ITreeInfo {
    if (location && location.title && location.title == title)
      return location;
    if (location.items && location.items.length > 0) {
      for (let child of location.items) {
        let locationChild: ITreeInfo = TreeInfoHelper.FindTreeLineName(child, title);
        if (locationChild) {
          return locationChild;
        }
      }
    }
    return null;
  }

  public static FindAllTreeLineName(location: ITreeInfo, title: string): ITreeInfo[] {
    let allTreeLine: ITreeInfo[] = [];
    if (location && location.title && location.title == title)
      allTreeLine.push(location);
    if (location.items && location.items.length > 0) {
      for (let child of location.items) {
        let locationChild: ITreeInfo[] = TreeInfoHelper.FindAllTreeLineName(child, title);
        if (locationChild.length > 0) {
          locationChild.forEach(loc => allTreeLine.push(loc));
        }
      }
    }
    return allTreeLine;
  }

  public static SwapTreeLine(treeList: ITreeInfo[], treeline: ITreeInfo, down: boolean): { found: boolean, newIndex: number, canMoveDown: boolean } {
    for (var i = treeList.length - 1; i >= 0; i--) {
      if (treeList[i].id == treeline.id) {
        let newIndex = i;
        if (down) {
          newIndex = i + 1;
          if (newIndex >= treeList.length)
            newIndex = treeList.length - 1;
        }
        else {
          newIndex = i - 1;
          if (newIndex < 0) newIndex = 0;
        }
        treeList[i] = treeList.splice(newIndex, 1, treeList[i])[0];
        //NOTA: Index en el componente de árbol empieza por 1, así que le añadimos 1 al newIndex
        newIndex += 1;
        return { found: true, newIndex: newIndex, canMoveDown: newIndex != treeList.length };
      }
      if (treeList[i].items && treeList[i].items.length > 0) {
        let movedTree: { found: boolean, newIndex: number, canMoveDown: boolean } = TreeInfoHelper.SwapTreeLine(treeList[i].items, treeline, down);
        if (movedTree.found) {
          return { found: movedTree.found, newIndex: movedTree.newIndex, canMoveDown: movedTree.canMoveDown };
        }
      }
    }
    return { found: false, newIndex: -1, canMoveDown: true };
  }

  public static RemoveTreeLine(treeList: ITreeInfo[], treeline: ITreeInfo): boolean {
    for (var i = treeList.length - 1; i >= 0; i--) {
      if (treeList[i].id == treeline.id) {
        treeList.splice(i, 1);
        return true;
      }
      if (treeList[i].items && treeList[i].items.length > 0) {
        let found: boolean = TreeInfoHelper.RemoveTreeLine(treeList[i].items, treeline);
        if (found) {
          return true;
        }
      }
    }
    return false;
  }

  public static InsertTreeFirstLevel(treeList: ITreeInfo[], treeToInsert: ITreeInfo): ITreeInfo[] {
    if (treeList.length > 0)
      treeList.push(treeToInsert);
    else
      treeList.push(treeToInsert);
    return treeList;
  }

  public static InsertTree(treeList: ITreeInfo[], idTreeWhereInsert: string, treeToInsert: ITreeInfo, atTheEnd = false): ITreeInfo[] {
    let i = 0;
    let indexfound = 0;
    let found = false;
    for (let tree of treeList) {
      if (tree.id == idTreeWhereInsert) {
        found = true;
        indexfound = i;
      }
      if (!found && tree.items && tree.items.length > 0) {
        let treeItems = TreeInfoHelper.InsertTree(tree.items, idTreeWhereInsert, treeToInsert, atTheEnd);
        if (treeItems)
          tree.items = treeItems;
      }
      i++;
    }
    if (found) {
      if (atTheEnd)
        treeList.push(treeToInsert);
      else
        treeList.splice(indexfound, 0, treeToInsert);
      return treeList;
    }

    return treeList;
  }
}