import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {

  public readonly shopeeLink: string = `https://shopee.com.br/`;

  public searchText: string = '';
  public readonly products: Array<any> = [
    {
      url: 'https://media.istockphoto.com/id/456125767/pt/foto/mochila-laranja-isolado-com-caminho.jpg?s=2048x2048&w=is&k=20&c=zY9XfulzWymluMzwQCeucDku5z1el0L5urolFyxjLiw=',
      title: 'Mochila',
      value: 11134.80,
      description: 'Mochila da Dora Aventureira',
    },
    {
      url: 'https://media.istockphoto.com/id/456125767/pt/foto/mochila-laranja-isolado-com-caminho.jpg?s=2048x2048&w=is&k=20&c=zY9XfulzWymluMzwQCeucDku5z1el0L5urolFyxjLiw=',
      title: 'Bíblia',
      value: 34.80,
      description: 'Mochila da Dora Aventureira'
    },
    {
      url: 'https://media.istockphoto.com/id/456125767/pt/foto/mochila-laranja-isolado-com-caminho.jpg?s=2048x2048&w=is&k=20&c=zY9XfulzWymluMzwQCeucDku5z1el0L5urolFyxjLiw=',
      title: 'Camisa',
      value: 34.80,
      description: 'Mochila da Dora Aventureira'
    },
    {
      url: 'https://media.istockphoto.com/id/456125767/pt/foto/mochila-laranja-isolado-com-caminho.jpg?s=2048x2048&w=is&k=20&c=zY9XfulzWymluMzwQCeucDku5z1el0L5urolFyxjLiw=',
      title: 'Caderno',
      value: 34.80,
      description: 'Mochila da Dora Aventureira'
    },
    {
      url: 'https://media.istockphoto.com/id/456125767/pt/foto/mochila-laranja-isolado-com-caminho.jpg?s=2048x2048&w=is&k=20&c=zY9XfulzWymluMzwQCeucDku5z1el0L5urolFyxjLiw=',
      title: 'Estojo',
      value: 34.80,
      description: 'Mochila da Dora Aventureira'
    },
    {
      url: 'https://media.istockphoto.com/id/456125767/pt/foto/mochila-laranja-isolado-com-caminho.jpg?s=2048x2048&w=is&k=20&c=zY9XfulzWymluMzwQCeucDku5z1el0L5urolFyxjLiw=',
      title: 'Marca página',
      value: 34.80,
      description: 'Mochila da Dora Aventureira'
    }
  ];

  public productList: Array<any> = []

  constructor() { }

  ngOnInit() {
    this.productList = this.products;
  }

  redirectToShopee() {
    open(this.shopeeLink)
  }

  searchProduct(event: any) {
    this.productList = this.products.filter(e => e.title.toLowerCase().includes(event.detail.value.toLowerCase()));
  }

}
