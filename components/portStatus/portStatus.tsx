import React, { Component, useState, useEffect } from 'react';
import getPort from 'get-port';

interface PortStatusProps { }

interface PortStatusState {
    usedPorts: number[];
}

class PortStatus extends Component<PortStatusProps, PortStatusState> {
    constructor(props: PortStatusProps) {
        super(props);
        this.state = {
            usedPorts: [],
        };
    }

    async componentDidMount() {
        const ports = await getPort({ port: getPort.makeRange(0, 65535) });

        this.setState({ usedPorts: ports });
    }

    render() {
        return (
            <div className="port-status">
                <h3>Used Local Ports:</h3>
                <ul>
                    {this.state.usedPorts.map((port) => (
                        <li key={port}>{port}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default PortStatus;
