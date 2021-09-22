import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/Interfaces/products.interface';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  listadoProductos: Products [] = [
    {   
        id: 1,
        name: "Television Sorny",
        price: 120000,
        img: "https://as.com/meristation/imagenes/2019/08/28/betech/1567023886_456249_1567033132_sumario_normal.jpg"
    },
    {
        id: 2,
        name: "Parlantes Cumbia chin chin",
        price: 20000,
        img: "https://mla-s1-p.mlstatic.com/813391-MLA42254111637_062020-F.jpg"
    },
    {
        id: 3,
        name: "Auriculares no escucho nada",
        price: 35000,
        img: "https://images.philips.com/is/image/PhilipsConsumer/TAH4205WT_00-IMS-es_AR?$jpglarge$&wid=960"
    },
    {
        id: 4,
        name: "Mecvuk aire",
        price: 250000,
        img: "https://www.muycomputer.com/wp-content/uploads/2020/11/MacBook-Air-con-M1-1000x600.jpg"
    },
    {
        id: 5,
        name: "Notebook lenovo",
        price: 100000,
        img: "https://yuhmak.vteximg.com.br/arquivos/ids/156541/E0000013648-NOTEBOOK-LENOVO-i3-V130-15IKB-4G256SSD-W10.jpg"
    },
    {
        id: 6,
        name: "Teclado 'Hola Juan Carlos'",
        price: 8000,
        img: "https://s3-sa-east-1.amazonaws.com/peluffo/39b42091-a487-4a90-9628-15868cb7a18d.jpg"
    },
    {
        id: 7,
        name: "Lavarropas mucho",
        price: 15000,
        img: "https://yuhmak.vteximg.com.br/arquivos/ids/158414/E0000015316-lavarropas-samsung-ww70monhuu-7kg-silver.png"
    },
    {
        id: 8,
        name: "Heladera frozono",
        price: 95000,
        img: "http://electroluxar.vteximg.com.br/arquivos/ids/159945/heladera-no-frost-electrolux-dfn3000p-plata-265lts-_Detalhe1.png"
    },
    {
        id: 9,
        name: "Monitor ultramega 4K",
        price: 66666,
        img: "https://images.samsung.com/is/image/samsung/sg-led-sr350-ls27r350fhexxs-frontblack-215191820?$720_576_PNG$"
    },
    {
        id: 10,
        name: "Mouse Ratón",
        price: 2500,
        img: "http://snpi.dell.com/snp/images/products/large/dell_wm126_wireless_optical_mouse_blk_3_l.jpg"
    }
  ]

  listadoFiltrado: Products [] = [
    {   
        id: 1,
        name: "Television Sorny",
        price: 120000,
        img: "https://as.com/meristation/imagenes/2019/08/28/betech/1567023886_456249_1567033132_sumario_normal.jpg"
    },
    {
        id: 2,
        name: "Parlantes Cumbia chin chin",
        price: 20000,
        img: "https://mla-s1-p.mlstatic.com/813391-MLA42254111637_062020-F.jpg"
    },
    {
        id: 3,
        name: "Auriculares no escucho nada",
        price: 35000,
        img: "https://images.philips.com/is/image/PhilipsConsumer/TAH4205WT_00-IMS-es_AR?$jpglarge$&wid=960"
    },
    {
        id: 4,
        name: "Mecvuk aire",
        price: 250000,
        img: "https://www.muycomputer.com/wp-content/uploads/2020/11/MacBook-Air-con-M1-1000x600.jpg"
    },
    {
        id: 5,
        name: "Notebook lenovo",
        price: 100000,
        img: "https://yuhmak.vteximg.com.br/arquivos/ids/156541/E0000013648-NOTEBOOK-LENOVO-i3-V130-15IKB-4G256SSD-W10.jpg"
    },
    {
        id: 6,
        name: "Teclado 'Hola Juan Carlos'",
        price: 8000,
        img: "https://s3-sa-east-1.amazonaws.com/peluffo/39b42091-a487-4a90-9628-15868cb7a18d.jpg"
    },
    {
        id: 7,
        name: "Lavarropas mucho",
        price: 15000,
        img: "https://yuhmak.vteximg.com.br/arquivos/ids/158414/E0000015316-lavarropas-samsung-ww70monhuu-7kg-silver.png"
    },
    {
        id: 8,
        name: "Heladera frozono",
        price: 95000,
        img: "http://electroluxar.vteximg.com.br/arquivos/ids/159945/heladera-no-frost-electrolux-dfn3000p-plata-265lts-_Detalhe1.png"
    },
    {
        id: 9,
        name: "Monitor ultramega 4K",
        price: 66666,
        img: "https://images.samsung.com/is/image/samsung/sg-led-sr350-ls27r350fhexxs-frontblack-215191820?$720_576_PNG$"
    },
    {
        id: 10,
        name: "Mouse Ratón",
        price: 2500,
        img: "http://snpi.dell.com/snp/images/products/large/dell_wm126_wireless_optical_mouse_blk_3_l.jpg"
    }
  ]

  value = '';

  editarse: Products = {
      name: '',
      price: 0,
      img: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  filtrar(valor: Event){
    const filterValue = (valor.target as HTMLInputElement).value;

    this.listadoFiltrado = this.listadoProductos.filter(x => x.name.trim().toLocaleLowerCase().includes(filterValue.trim().toLocaleLowerCase()));
  }

  guardarProducto(nuevo: Products){

      if(nuevo.id === undefined){
        this.listadoProductos.push(nuevo);
        this.listadoFiltrado.push(nuevo);
    }
    else{
        const i = this.listadoProductos.findIndex(x => x.id === nuevo.id);
        nuevo.id = i+1;
        this.listadoProductos.splice(i,1);
        this.listadoProductos.push(nuevo);
        this.listadoProductos.sort((a,b) => a.id! - b.id! );
        this.listadoFiltrado = this.listadoProductos;
    }

  }

  eliminar(nuevo: Products){
    
    const i = this.listadoProductos.findIndex(x => x === nuevo);
    this.listadoProductos.splice(i,1);
    const y = this.listadoFiltrado.findIndex(x => x === nuevo);
    this.listadoFiltrado.splice(y,1);
  }

//   editar(nuevo: Products){
//       console.log(nuevo);
//       this.editarse = nuevo;
//   }

}
