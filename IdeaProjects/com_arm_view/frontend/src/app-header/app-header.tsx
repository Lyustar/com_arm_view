import React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';

export default function AppHeader() {
    return (
        <div className="card">
            <TabView>
                <TabPanel header="Абоненты">
                    <p className="m-0">
                        Текст вкладки 1
                    </p>
                </TabPanel>
                <TabPanel header="Очереди">
                    <p className="m-0">
                        Текст вкладки 2
                    </p>
                </TabPanel>
                <TabPanel header="Менеджеры">
                    <p className="m-0">
                        Текст вкладки 3
                    </p>
                </TabPanel>
                <TabPanel header="Организации" disabled></TabPanel>
                <TabPanel header="Клиенты" disabled></TabPanel>
                <TabPanel header="Места" disabled></TabPanel>
                <TabPanel header="Каналы" disabled></TabPanel>
                <TabPanel header="Приложения" disabled></TabPanel>
                <TabPanel header="Опреации" disabled></TabPanel>
                <TabPanel header="Контакты ОСТ" disabled></TabPanel>
                <TabPanel header="Контакты систем" disabled></TabPanel>
                <TabPanel header="Индикаторы событий" disabled></TabPanel>
            </TabView>
        </div>
    )
}
