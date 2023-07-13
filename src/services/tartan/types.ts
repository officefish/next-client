

export interface IColorItem {
    color: string,
    size: number
}

export interface ITartanPatternData extends Array<IColorItem> {}

export interface ITartanPattern {
    colors: ITartanPatternData
}