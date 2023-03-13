
import React, {useState} from 'react';
import { InputText } from "primereact/inputtext";
import { Calendar, CalendarChangeEvent } from 'primereact/calendar';
import { CascadeSelect, CascadeSelectChangeEvent } from 'primereact/cascadeselect';
import { Button } from 'primereact/button';
//import { Card } from 'primereact/card';

interface City {
    cname: string;
    code: string;
}

interface CountryState {
    name: string;
    cities: City[];
}

interface Country {
    name: string;
    code: string;
    states: CountryState[];
}

export default function PanelFilter() {
    const [date, setDate] = useState <string | Date | null>(null);
    const [selectedCity, setSelectedCity] = useState<City | null>(null);


    const countries: Country[] = [
        {
            name: 'Australia',
            code: 'AU',
            states: [
                {
                    name: 'New South Wales',
                    cities: [
                        {cname: 'Sydney', code: 'A-SY'},
                        {cname: 'Newcastle', code: 'A-NE'},
                        {cname: 'Wollongong', code: 'A-WO'}
                    ]
                },
                {
                    name: 'Queensland',
                    cities: [
                        {cname: 'Brisbane', code: 'A-BR'},
                        {cname: 'Townsville', code: 'A-TO'}
                    ]
                },

            ]
        },
        {
            name: 'Canada',
            code: 'CA',
            states: [
                {
                    name: 'Quebec',
                    cities: [
                        {cname: 'Montreal', code: 'C-MO'},
                        {cname: 'Quebec City', code: 'C-QU'}
                    ]
                },
                {
                    name: 'Ontario',
                    cities: [
                        {cname: 'Ottawa', code: 'C-OT'},
                        {cname: 'Toronto', code: 'C-TO'}
                    ]
                },

            ]
        },
        {
            name: 'United States',
            code: 'US',
            states: [
                {
                    name: 'California',
                    cities: [
                        {cname: 'Los Angeles', code: 'US-LA'},
                        {cname: 'San Diego', code: 'US-SD'},
                        {cname: 'San Francisco', code: 'US-SF'}
                    ]
                },
                {
                    name: 'Florida',
                    cities: [
                        {cname: 'Jacksonville', code: 'US-JA'},
                        {cname: 'Miami', code: 'US-MI'},
                        {cname: 'Tampa', code: 'US-TA'},
                        {cname: 'Orlando', code: 'US-OR'}
                    ]
                },
                {
                    name: 'Texas',
                    cities: [
                        {cname: 'Austin', code: 'US-AU'},
                        {cname: 'Dallas', code: 'US-DA'},
                        {cname: 'Houston', code: 'US-HO'}
                    ]
                }
            ]
        }
    ];
    const [value, setValue] = useState<string>('');


    return (
        <>
            <div id="divFilter" className="card flex justify-content-center">
                <Calendar value={date}  dateFormat="dd.mm.yy" locale="en"  showIcon />
                <CascadeSelect value={selectedCity} onChange={(e: CascadeSelectChangeEvent) => setSelectedCity(e.value)} options={countries}
                               optionLabel="cname" optionGroupLabel="name" optionGroupChildren={['states', 'cities']}
                               className="w-full md:w-14rem" breakpoint="767px" placeholder="Select a City"  />
            </div>

            <div className="card flex justify-content-center">
                <InputText value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
            </div>

            <div className="card flex flex-wrap justify-content-center gap-3">
                <Button icon="pi pi-check" />
                <Button label="Submit" icon="pi pi-check" />
                <Button label="Submit" icon="pi pi-check" iconPos="right" />
            </div>
        </>
    )
}

{/*onChange={(e : CalendarChangeEvent) => setDate(e.value)}*/}
