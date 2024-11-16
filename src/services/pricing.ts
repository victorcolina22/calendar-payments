import { chromium } from 'playwright';
import { getDB } from '../config/mongodb';

export class PricingService {
  static async getAllStreamingServicesPricing() {
    const db = await getDB();
    const collections = await db.collection('pricing').find().toArray();
    return collections;
  }

  static async insertPricing(pricing: { name: string; price: string }) {
    const db = await getDB();
    return await db.collection('pricing').insertOne(pricing);
  }

  static async getSpotifyPricing() {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto('https://www.spotify.com/cl/premium/');

    const price = await page.$$eval('#plan-premium-individual', (results) => {
      return results.map((el) => {
        const element = el?.querySelector('p')?.nextElementSibling?.innerHTML;
        const price = element?.split('&')[0].split(',')[1].trim() ?? '';
        return { name: 'Spotify', price };
      });
    });

    await browser.close();

    return price[0];
  }

  static async getCrunchyRollPricing() {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto('https://www.crunchyroll.com/es/premium');

    const price = await page.$$eval('h3', (results) => {
      // console.log(results);
      // return results.map((el) => {
      //   console.log(el);
      //   // const element = el?.querySelector('p')?.nextElementSibling?.innerHTML;
      //   // const price = element?.split('&')[0].split(',')[1].trim() ?? '';
      //   return { name: '', price: 0 };
      // });
      return results;
    });

    await browser.close();
    return price;

    // return price[0];
  }
}
