export type Transports =
    | 'bus'
    | 's-bahn'
    | 'u-bahn';

export type TransportType = {
    type: Transports
};


export type LineType = {
    provider: Transports,
    line: string,
}

export type Mocks = {
    transport: TransportType[],
    line: LineType[] 
};

export const transportInfo: Mocks = {
    transport: [
        {
            type: "bus"
        },
        {
            type: "s-bahn"
        },
        {
            type: "u-bahn"
        }
    ],
    line: [
        {
            line: 's8',
            provider: "s-bahn"
        },
        {
            line: 's6',
            provider: "s-bahn"
        },
        {
            line: '68',
            provider: "bus"
        },
        {
            line: 'u1',
            provider: "u-bahn"
        }
    ]
};