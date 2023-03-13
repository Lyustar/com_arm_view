
import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import PanelFilter from "../panel/panel-filter/panel-filter";
import CardEdit from '../panel/card-edit/card-edit';
import DataEdit from '../panel/data-edit/data-edit';

export default function AppBody() {
    return (
        <div className="card">
            <Accordion activeIndex={0}>
                <AccordionTab header="Фильтры">
                    <p className="m-0">
                        Фильтры для поиска данных
                    </p>
                    <PanelFilter/>
                </AccordionTab>
                <AccordionTab header="Данные">
                    <p className="m-0">
                        Отображение данных
                    </p>
                    <DataEdit/>
                </AccordionTab>
                <AccordionTab header="Редактирование данных">
                    <p className="m-0">
                        Корректировка данных
                    </p>
                    <CardEdit/>
                </AccordionTab>
            </Accordion>
        </div>
    )
}