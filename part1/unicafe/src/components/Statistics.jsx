import React, { useState, useEffect } from 'react'

const Statistics = (props) => {
    const [average, setAverage] = useState(0);
    const [total, setTotal] = useState(0);
    const [positivePercent, setPositivePercent] = useState(0);

    useEffect(() => {
        setTotal((props.statistics).reduce((acc, currentVal) => {
            return acc + currentVal.count;
        }, 0));

        if (total !== 0) {
            setAverage((props.statistics).reduce((acc, currentVal) => {
                return acc + currentVal.count * currentVal.weight;
            }, 0) / total);

            setPositivePercent(props.statistics[0].count / total * 100);
        }

    }, [props.statistics, total]);
    return (
        <div>
            <h1>statistics</h1>
            <table>
                {props.statistics.map((statistic, index) => (
                    <tr key={index}>
                        <td>{statistic.name}</td>
                        <td>{statistic.count}</td>
                    </tr>
                ))
                }
                <tr>
                    <td>all</td>
                    <td>{total}</td>
                </tr>
                <tr>
                    <td>average</td>
                    <td>{average}</td>
                </tr>
                <tr>
                    <td>positive</td>
                    <td>{positivePercent}%</td>
                </tr>
            </table>
        </div>
    )
}

export default Statistics
