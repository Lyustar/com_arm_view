import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';

export default function  AppMenu() {
   const items: MenuItem[] =  [
        {label: 'Мониторинг', icon: 'pi pi-fw pi-home'},
        {label: 'Журналы', icon: 'pi pi-fw pi-calendar'},
        {label: 'Справочники', icon: 'pi pi-fw pi-file'},
        {label: 'Отчёты', icon: 'pi pi-fw pi-file'},
        {label: 'Администрирование', icon: 'pi pi-fw pi-users'},
        {label: 'Выход', icon: 'pi pi-fw pi-power-off'}
    ];
    const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>;
    const end = <div><p>Right element</p></div>;

/*   const start = {label: 'АРМ КСДД', icon: 'pi pi-fw pi-home'};
   const end = {label: 'Выход', icon: 'pi pi-fw pi-power-off'};*/

    return (<Menubar model={items} start={start} /*end={end} */
    />);
}

