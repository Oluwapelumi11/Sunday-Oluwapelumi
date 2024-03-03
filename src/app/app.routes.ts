import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { DataAnalysisComponent } from './data-analysis/data-analysis.component';


export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        title: "Sunday Oluwapelumi's Portfolio"
    },{
        path: "fullstack",
        component: WorksComponent,
        title: "Sunday Oluwapelumi's Projects",
    },{
        path : "contact",
        component: ContactComponent,
        title: "Contact Sunday Oluwapelumi"
    },{
        path: "about",
        component: AboutComponent,
        title: "About Sunday Oluwapelumi"
    },{
        path: "data-science",
        component: DataAnalysisComponent,
        title: "Data Analysis Projects"
    }
];
// import { Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { WorksComponent } from './works/works.component';
// import { ContactComponent } from './contact/contact.component';
// import { AboutComponent } from './about/about.component';
// import { DataAnalysisComponent } from './data-analysis/data-analysis.component';

// export const routes: Routes = [
//     {
//         path: "",
//         component: HomeComponent,
//     },{
//         path: "fullstack",
//         component: WorksComponent,
//     },{
//         path : "contact",
//         component: ContactComponent,
//     },{
//         path: "about",
//         component: AboutComponent,
//     },{
//         path: "data-science",
//         component: DataAnalysisComponent,
//     }
// ];
