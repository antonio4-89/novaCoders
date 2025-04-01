import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EChartsOption } from 'echarts';
import { NewEmployedComponent } from 'src/app/auth/new-employed/new-employed.component';
import { AddProductoComponent } from 'src/app/components/add-producto/add-producto.component';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.scss'],
  standalone: false
})
export class AdministradorComponent  implements OnInit {

  isLargeScreen: boolean = true;
  loading: boolean = false

  chartOptions: EChartsOption  = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ]
      }
    ]
  };

  // chartOptions: EChartsOption = {

  // title: {
  //   text: 'Nightingale Chart',
  //   subtext: 'Fake Data',
  //   left: 'center'
  // },
  // tooltip: {
  //   trigger: 'item',
  //   formatter: '{a} <br/>{b} : {c} ({d}%)'
  // },
  // legend: {
  //   left: 'center',
  //   top: 'bottom',
  //   data: [
  //     'rose1',
  //     'rose2',
  //     'rose3',
  //     'rose4',
  //     'rose5',
  //     'rose6',
  //     'rose7',
  //     'rose8'
  //   ]
  // },
  // toolbox: {
  //   show: true,
  //   feature: {
  //     mark: { show: true },
  //     dataView: { show: true, readOnly: false },
  //     restore: { show: true },
  //     saveAsImage: { show: true }
  //   }
  // },
  // series: [

  //   {
  //     name: 'Area Mode',
  //     type: 'pie',
  //     radius: [20, 140],
  //     center: ['50%', '50%'],
  //     roseType: 'area',
  //     itemStyle: {
  //       borderRadius: 5
  //     },
  //     label: {
  //       show: false
  //     },
  //     emphasis: {

  //     },
  //     data: [
  //       { value: 30, name: 'rose 1' },
  //       { value: 28, name: 'rose 2' },
  //       { value: 26, name: 'rose 3' },
  //       { value: 24, name: 'rose 4' },
  //       { value: 22, name: 'rose 5' },
  //       { value: 20, name: 'rose 6' },
  //       { value: 18, name: 'rose 7' },
  //       { value: 16, name: 'rose 8' }
  //     ]
  //   }
  // ]
  // }

  // chartOptions2: EChartsOption = {

  //   color: ['#24878080'],
  //   xAxis: {
  //     type: 'category',
  //     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  //   },
  //   yAxis: {
  //     type: 'value'
  //   },
  //   series: [{
  //     data: [120, 200, 150, 80, 70, 110, 130],
  //     type: 'bar'
  //   }]

  // }

  constructor(
    private modal: ModalController
  ) {
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  async productos() {
    // const modal = await this.modal.create({
    //   component: ProductoAdminComponent,
    //   backdropDismiss: true,
    //   cssClass: 'modal2'
    // });
    // await modal.present()
  }
  async newEmpleado() {
    const modal = await this.modal.create({
      component: NewEmployedComponent,
      backdropDismiss: false,
      cssClass: 'modal3'
    });
    await modal.present()
  }


 async addProdructo(){
    const modal = await this.modal.create({
      component: AddProductoComponent,
      backdropDismiss: false,
      cssClass: 'modal3', 
    })
    await modal.present()
  }

  viewEmpleyed(){
    
  }

}
