import {Path} from "../Path";
import {Node} from "../Node";
import {Selection} from "../Selection";
import {Range} from "../Range";

export type InsertNodeOperation = {
    type: 'insert_node',
    path: Path,
    node: Node,
    [key: string]: unknown
};

export type InsertTextOperation = {
    type: 'insert_text',
    path: Path,
    offset: number,
    text: string,
    [key: string]: unknown
};

export type MergeNodeOperation = {
    type: 'merge_node',
    path: Path,
    position: number,
    target: number | null,
    properties: Partial<Node>,
    [key: string]: unknown
};

export type MoveNodeOperation = {
    type: 'move_node',
    path: Path,
    newPath: Path,
    [key: string]: unknown
};

export type RemoveNodeOperation = {
    type: 'remove_node',
    path: Path,
    node: Node,
    [key: string]: unknown
};

export type RemoveTextOperation = {
    type: 'remove_text',
    path: Path,
    offset: number,
    text: string,
    [key: string]: unknown
};

export type SetNodeOperation = {
    type: 'set_node',
    path: Path,
    properties: Partial<Node>,
    newProperties: Partial<Node>,
    [key: string]: unknown
};

export type SetSelectionOperation = {
    type: 'set_selection',
    [key: string]: unknown,
    properties: null,
    newProperties: Range
} | {
    type: 'set_selection',
    [key: string]: unknown,
    properties: Partial<Range>,
    newProperties: Partial<Range>
} | {
    type: 'set_selection',
    [key: string]: unknown,
    properties: Range,
    newProperties: null
};

export type SplitNodeOperation = {
    type: 'split_node',
    path: Path,
    position: number,
    target: number | null,
    properties: Partial<Node>,
    [key: string]: unknown
};

export type NodeOperation = InsertNodeOperation | MergeNodeOperation | MoveNodeOperation | RemoveNodeOperation | SetNodeOperation | SplitNodeOperation;
export type SelectionOperation = SetSelectionOperation;
export type TextOperation = InsertTextOperation | RemoveTextOperation;

export type Operation =
    | NodeOperation
    | SelectionOperation
    | TextOperation
    ;

function isMutationOperation(operation: Operation): boolean {
    return operation.type !== "set_selection";
}

export const Operation = {
    isMutationOperation
};
