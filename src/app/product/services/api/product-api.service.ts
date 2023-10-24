import { Injectable } from '@angular/core';

import axios from 'axios';


@Injectable()
export class ProductApiService {

  async getData() {
    try {
      const res = await axios.get('assets/nomenclature.json');
      return  res.data;
    } catch (error) {
      throw new Error('get product data failed');
    }
  }
}
