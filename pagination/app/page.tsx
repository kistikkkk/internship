'use client';

import styles from './page.module.css';
import { useState, useEffect } from 'react';
import stationsData from '../data.json';

interface Station {
    id: number;
    hex: string;
    line: string;
    name: string;
}

export default function Page() {
    const lines = [...new Set(stationsData.map(station => station.line))];
    const [pageSize, setPageSize] = useState(10);
    const [allStations, setAllStations] = useState<Station[]>(stationsData);
    const [stations, setStations] = useState<Station[]>([]);
    const [page, setPage] = useState<number | null>(1);
    const [maxPage, setMaxPage] = useState<number | null>(null);

    const [filterByLine, setFilterByLine] = useState<string | null>(null);
    const [filterByStationName, setFilterByStationName] = useState<string | null>(null);

    useEffect(() => {
        let filteredStations = [...allStations];

        if (filterByLine) {
            filteredStations = filteredStations.filter(station => station.line === filterByLine);
        }

        if (filterByStationName) {
            filteredStations = filteredStations.filter(station =>
                station.name.toLowerCase().includes(filterByStationName.toLowerCase())
            );
        }

        const startIndex = ((page || 1) - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const slicedStations = filteredStations.slice(startIndex, endIndex);
        setStations(slicedStations);

        setMaxPage(Math.ceil(filteredStations.length / pageSize));
    }, [page, filterByLine, filterByStationName, pageSize, allStations]);


    const handlePageChange = (newPage: number) => {
        if (newPage && newPage >= 1 && newPage <= (maxPage || 1)) {
            setPage(newPage);
        }
    };

    return (
        <div className={styles.container}>
            <h1>Станции Московского Метро</h1>

            <div className={styles.filterContainer}>
                <label htmlFor="lineFilter">Линия:</label>
                <select id="lineFilter" onChange={(e) => setFilterByLine(e.target.value)}>
                    <option value="">Все линии</option>
                    {lines.map(line => (
                        <option key={line} value={line}>{line}</option>
                    ))}
                </select>

                <label htmlFor="stationNameFilter">Поиск станции:</label>
                <input
                    type="text"
                    id="stationNameFilter"
                    placeholder="Введите часть названия станции"
                    onChange={(e) => setFilterByStationName(e.target.value)}
                />
            </div>


            <ul className={styles.stationsList}>
                {stations.map(station => (
                    <li key={station.id} className={styles.stationItem}>
                        <div className={styles.lineOval} style={{ backgroundColor: station.hex }}>
                            {station.line}
                        </div>
                        <span>{station.name}</span>
                    </li>
                ))}
            </ul>

            <div className={styles.pagination}>
                <button disabled={!page || page === 1} onClick={() => handlePageChange(page ? (page - 1) : 1)}>
                    Назад
                </button>
                <span>
                    Страница {page || 1} / {maxPage || 1}
                </span>
                <button disabled={!maxPage || page === maxPage} onClick={() => handlePageChange(page ? (page + 1) : (maxPage || 1))}>
                    След.
                </button>
            </div>
        </div>
    );
}