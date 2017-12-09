

// export interface StoreState {
//     languageName: string;
//     enthusiasmLevel: number;
// }


export interface ITestRedux {
    languageName: string;
    enthusiasmLevel: number;
}

export interface IDemo {
    testRedux: ITestRedux;
}


export interface IStoreState {
    demo: IDemo;
}
