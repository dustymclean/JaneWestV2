import { Collection } from './types';

export const JANE_WEST_CONTACT = {
  name: "Jane West",
  email: "jane@janewest.com",
  website: "https://janewest.com",
  tagline: "ARCHITECTING THE FUTURE SINCE 2014",
  vcf: `BEGIN:VCARD
VERSION:3.0
FN:Jane West
ORG:Jane West / Women Grow
TITLE:CEO & Founder
EMAIL:jane@janewest.com
URL:https://janewest.com
NOTE:Life is better with Jane. Architecting the future since 2014.
END:VCARD`
};

export interface CollectionItem extends Collection {
  seoCluster: string;
  category: string;
}

export const COLLECTIONS_EXTENDED: CollectionItem[] = [
  {
    id: 'art-deco',
    category: 'ART DECO',
    title: 'The Twenties Collection',
    mainLink: 'https://janewest.com/collections/the-twenties-collection',
    subtitle: 'Signature Art Deco glassware in iconic colors like Obsidian, Teal, and Amber. Inspired by the roar of the 1920s.',
    description: 'Our flagship collection redefined the aesthetic of the modern consumer. Featuring luxury borosilicate glass that doubles as home decor.',
    featuredItems: ['WATER PIPES', 'BUBBLERS', 'BEAKERS', 'ASHTRAYS'],
    itemLinks: {
      'WATER PIPES': 'https://janewest.com/products/twenties-collection-water-pipe',
      'BUBBLERS': 'https://janewest.com/products/twenties-collection-bubbler',
      'BEAKERS': 'https://janewest.com/products/twenties-collection-hand-pipe',
      'ASHTRAYS': 'https://janewest.com/products/twenties-collection-ashtray'
    },
    status: 'SELECTED',
    colorTheme: 'from-amber-100 to-amber-200',
    seoCluster: 'Experience the pinnacle of sophisticated consumption with the Jane West Twenties Collection. Discover mid-century modern bongs and Art Deco cannabis glassware crafted from premium heat-resistant borosilicate. This collection features signature cobalt blue bubblers, elegant beaker bongs, and designer glass pipes that serve as functional art for the discerning enthusiast. Every piece reflects the luxury aesthetic of the 1920s, merging high-end cannabis home decor with scientific glass precision.'
  },
  {
    id: 'travel',
    category: 'TRAVEL',
    title: 'The Travel Collection',
    mainLink: 'https://janewest.com/products/day-night-travel-pipe-set',
    subtitle: 'Sleek, discreet metal tools designed for the modern trailblazer who values utility and style.',
    description: 'Discreet solutions for the on-the-go lifestyle. Engineered from high-grade materials to fit seamlessly into your daily carry.',
    featuredItems: ['THE CLASSIC (FLASK)', 'THE WAND (MASCARA)', 'THE COMPACT'],
    itemLinks: {
      'THE CLASSIC (FLASK)': 'https://janewest.com/products/janewest-classic',
      'THE WAND (MASCARA)': 'https://www.iheartjane.com/products/396896/grav-jane-west-wand',
      'THE COMPACT': 'https://janewest.com/products/janewest-compact'
    },
    status: 'SELECTED',
    colorTheme: 'from-slate-100 to-slate-200',
    seoCluster: 'Master the art of discreet consumption with the Jane West Travel Collection. Our range includes sleek one-hitter pipes designed for purse storage, the iconic mascara-shaped travel pipe, and portable smell-proof dugout kits. Designed for the modern trailblazer, these compact smoking accessories offer utility without compromising on style. Find the perfect travel pipe set or the classic flask-style dugout for on-the-go discretion, featuring built-in mirrors and high-grade metal finishes.'
  },
  {
    id: 'daily',
    category: 'DAILY',
    title: 'Daily Accessories',
    mainLink: 'https://janewest.com',
    subtitle: 'Practical home essentials that elevate your daily routine from mundane to magnificent.',
    description: 'Elevated essentials that integrate into your home environment. Clean lines, superior function, and timeless design.',
    featuredItems: ['SOLO ONE-HITTER', 'THE CUBE', 'OUTDOOR PIPE'],
    itemLinks: {
      'SOLO ONE-HITTER': 'https://janewest.com/products/the-solo',
      'THE CUBE': 'https://janewest.com/products/the-cube',
      'OUTDOOR PIPE': 'https://janewest.com/products/the-outdoor-pipe'
    },
    status: 'SELECTED',
    colorTheme: 'from-pink-100 to-pink-200',
    seoCluster: 'Elevate your home ritual with Jane West Daily Essentials. This collection features high-end cannabis home decor including the Jane West Solo one-hitter, virtually unbreakable silicone travel pipes, and the innovative Cube storage container. Our elegant weed grinders and sophisticated storage solutions are designed to blend seamlessly into modern interior design. Experience the intersection of luxury cannabis lifestyle and functional daily tools with our architectural glassware and refined home accessories.'
  },
  {
    id: 'collaboration',
    category: 'COLLABORATION',
    title: 'Jane West x GRAV',
    mainLink: 'https://www.headshop.com/collections/jane-west',
    subtitle: 'The original high-end borosilicate scientific glass collaborative line for the discerning consumer.',
    description: 'A historic partnership that brought scientific glass precision to lifestyle-focused design. Iconic cobalt and clear borosilicate.',
    featuredItems: ['BEAKERS', 'STEAMROLLERS', 'BUBBLERS'],
    itemLinks: {
      'BEAKERS': 'https://smokea.com/products/jane-west-x-grav-labs-beaker-bong',
      'STEAMROLLERS': 'https://www.leafly.com/brands/caliconnected/products/caliconnected-grav-labs-jane-west-steamroller',
      'BUBBLERS': 'https://www.headshop.com/collections/jane-west'
    },
    status: 'SELECTED',
    colorTheme: 'from-blue-100 to-blue-200',
    seoCluster: 'Celebrate the historic Jane West x GRAV Labs collaboration, the gold standard in high-end borosilicate scientific glass. This collaborative line features iconic cobalt blue water pipes, designer steamrollers, and precision-engineered bubblers. Known for superior airflow and durability, these scientific glass pieces are must-haves for collectors of designer bongs. Architected for the discerning consumer who demands both laboratory-grade quality and high-fashion lifestyle aesthetics.'
  },
  {
    id: 'wellness',
    category: 'WELLNESS',
    title: "Jane's Brew (CBD)",
    mainLink: 'https://cbdfarmhouse.com/shop/cbd-hemp-products/cbd-hemp-edibles/janes-brew-cup-of-coffee/',
    subtitle: 'Specialized capsules and K-Cups designed to integrate wellness into your daily rituals.',
    description: 'Wellness reimagined. Integrating high-quality CBD into the rituals you already love, from morning coffee to nightly wind-down.',
    featuredItems: ['CHILL/HAPPY/SERENITY K-CUPS', 'CBD CAPSULES'],
    itemLinks: {
      'CHILL/HAPPY/SERENITY K-CUPS': 'https://cbdfarmhouse.com/shop/cbd-hemp-products/cbd-hemp-edibles/janes-brew-cup-of-coffee/',
      'CBD CAPSULES': 'https://cbdfarmhouse.com/shop/cbd-hemp-products/cbd-hemp-edibles/janes-brew-cup-of-coffee/'
    },
    status: 'REQUEST ENTRY',
    colorTheme: 'from-emerald-50 to-emerald-100',
    seoCluster: 'Revitalize your wellness routine with Jane\'s Brew CBD coffee. Our specialized CBD coffee K-cups are formulated for focus, featuring high-quality cannabidiol designed to integrate into your morning ritual or nightly serenity. Explore Jane West wellness capsules and functional hemp-infused coffee that supports a balanced lifestyle. Whether you need focus for your workday or a calm evening wind-down, our CBD products provide a seamless path to wellness integration.'
  }
];

export const COLLECTIONS = COLLECTIONS_EXTENDED;
export const SEO_CLUSTERS = COLLECTIONS_EXTENDED.map(col => col.seoCluster);