import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../book.model';

@Injectable({ providedIn: 'root' })
export class BookService {
  books: Book[] = [
    {
      id: 1,
      name: 'شازده کوچولو',
      price: 150000,
      inventory: 200,
      isbn: '978-3-16-148410-0',
      genere: 'کودکان',
      author: 'آنتوان دو سنت اگزوپری  ',
      translator: 'ابوالحسن نجفی',
      publisher: 'ماندگار',
      pubYear: 2012,
      gist:
        'عده‌ای از منتقدین بر این باور هستند که کتاب شازده کوچولو الهام گرفته شده از یکی از داستان‌های هانس کریستین اندرسون به نام پری دریایی کوچولو است. هانس کریستین اندرسون یکی از مشهورترین نویسندگان ادبیات کودک داستانی با این عنوان دارد. این باور از جایی می‌آید که هنگامی که اگزوپری به دلیل جراحت‌های بعد از سقوط در بیمارستان بستری بود، دوستش آنابلا برای او داستان پری دریایی کوچک را می‌خواند. منتقدین می‌گویند شاید بعد از شنیدن این قصه بوده است که اگزوپری تصمیم به نوشتن شازده کوچولو کرده است.',
      imageUrl: '../../../assets/books/little-prince.jpg',
    },
    {
      id: 2,
      name: 'آلیس در سرزمین عجایب',
      price: 220000,
      inventory: 400,
      isbn: '9786009817320',
      genere: 'نوجوان',
      author: '	لوئیس کارول',
      translator: 'مجید ریاحی',
      publisher: 'ماندگار',
      pubYear: 1925,
      gist:
        'شاهزاده خانم گفت: نتیجه می گیریم که عشق است که دنیا را می گرداند. آلیس یادش آمد که کسی گفته بود: (اگر همه آدم ها سرشان به کار خودشان گرم بود زمین بهتر دور خودش می چرخید.)',
      imageUrl: '../../../assets/books/alice-in-wondeland.png',
    },
    {
      id: 3,
      name: 'عادت های اتمی',
      price: 150000,
      inventory: 200,
      isbn: '978-3-16-148410-0',
      genere: 'روانشناسی',
      author: 'هادی بهمنی',
      translator: 'جیمز کلیر',
      publisher: 'ماندگار',
      pubYear: 2012,
      gist:
        'این کتاب، به سبک جالب و روان، به ما یاد می دهد که چگونه با شناخت عادت های کوچک و مدیریت این عادت ها، هر روز یک درصد بهتر شویم. هر روز یک درصد بهتر شدن، معادل سالی 37 برابر بهتر شدن است! به قوا جیمز گلیر (نویسنده کتاب)، همین رفتارها و عادت های کوچک است که تعیین می کند 5 سال بعد کجا هستیم و چقدر موفق شده ایم یا شکست خورده ایم!',
      imageUrl: '../../../assets/books/atmic-habits.jpg',
    },
    {
      id: 4,
      name: 'کار عمیق',
      price: 150000,
      inventory: 200,
      isbn: '978-3-16-148410-0',
      genere: 'روانشناسی',
      author: 'ذهن و روح',
      translator: 'جیمز کلیر',
      publisher: 'ماندگار',
      pubYear: 2012,
      gist:
        'کار عمیق، درسی است که من شخصا در دوران کاری‌ام بارها و بارها آن را یاد گرفتم. من ده سال است که دنبال‌کننده‌ی کار عمیق هستم، اما هنوز هم زمان‌هایی پیش می‌آید که از قدرت آن غافلگیر می‌شوم. در زمان دانشجویی‌ام که اولین‌بار با کار عمیق روبه‌رو شدم و آن را اجرا کردم متوجه شدم که این کار عمیق مرا قادر کرده است تا دو مقاله‌ی معتبر و باکیفیت در سال بنویسم (این تعداد مقاله برای یک دانشجو واقعا قابل احترام است) و در عین حال برخلاف بسیاری از هم دوره‌هایم بیشتر از وقت اداری کار نکنم و در تعطیلات آخر هفته به ندرت به کار مشغول باشم.',
      imageUrl: '../../../assets/books/deep-work.jpg',
    },
    {
      id: 5,
      name: 'کیمیاگر ',
      price: 150000,
      inventory: 200,
      isbn: '978-3-16-148410-0',
      genere: 'ذهن و روح',
      author: '	پائولو کوئلیو',
      translator: 'جیمز کلیر',
      publisher: 'ماندگار',
      pubYear: 2012,
      gist:
        'پائولو کوئیلو در سال 1947 در ریودوژانیرو به دنیا آمد . در نوجوانی کنجکاو و سرکش بود در دوران دانشجویی مبارز و بی آرام .  و چند بار به زندان افتاد . بعد از پایان دوران دانشجویی، مدتی ترانه سرای بزرگترین ارکستر راک در برزیل بود و همراه هنرمندان موسیقی به کشورهای دور و نزدیک سفر کرد. در سال 1988 رمان «کیمیاگر» خود را به دست چاپ رسید . این رمان پس از مدتی در ردیف پر فروش ترین کتاب های دنیا جای گرفت، و نویسنده اش به شهرت جهانی رسید. «کیمیاگر» به 59 زبان ترجمه شد و در 168 کشور جهان ، 60 میلیون نسخه آن به فروش رسید.',
      imageUrl: '../../../assets/books/kimiagar.jpg',
    },
    {
      id: 6,
      name: 'کیمیاگر ',
      price: 150000,
      inventory: 200,
      isbn: '978-3-16-148410-0',
      genere: 'ذهن و روح',
      author: '	پائولو کوئلیو',
      translator: 'جیمز کلیر',
      publisher: 'ماندگار',
      pubYear: 2012,
      gist:
        'پائولو کوئیلو در سال 1947 در ریودوژانیرو به دنیا آمد . در نوجوانی کنجکاو و سرکش بود در دوران دانشجویی مبارز و بی آرام .  و چند بار به زندان افتاد . بعد از پایان دوران دانشجویی، مدتی ترانه سرای بزرگترین ارکستر راک در برزیل بود و همراه هنرمندان موسیقی به کشورهای دور و نزدیک سفر کرد. در سال 1988 رمان «کیمیاگر» خود را به دست چاپ رسید . این رمان پس از مدتی در ردیف پر فروش ترین کتاب های دنیا جای گرفت، و نویسنده اش به شهرت جهانی رسید. «کیمیاگر» به 59 زبان ترجمه شد و در 168 کشور جهان ، 60 میلیون نسخه آن به فروش رسید.',
      imageUrl: '../../../assets/books/kimiagar.jpg',
    },
    {
      id: 7,
      name: 'کار عمیق',
      price: 150000,
      inventory: 200,
      isbn: '978-3-16-148410-0',
      genere: 'روانشناسی',
      author: 'ذهن و روح',
      translator: 'جیمز کلیر',
      publisher: 'ماندگار',
      pubYear: 2012,
      gist:
        'کار عمیق، درسی است که من شخصا در دوران کاری‌ام بارها و بارها آن را یاد گرفتم. من ده سال است که دنبال‌کننده‌ی کار عمیق هستم، اما هنوز هم زمان‌هایی پیش می‌آید که از قدرت آن غافلگیر می‌شوم. در زمان دانشجویی‌ام که اولین‌بار با کار عمیق روبه‌رو شدم و آن را اجرا کردم متوجه شدم که این کار عمیق مرا قادر کرده است تا دو مقاله‌ی معتبر و باکیفیت در سال بنویسم (این تعداد مقاله برای یک دانشجو واقعا قابل احترام است) و در عین حال برخلاف بسیاری از هم دوره‌هایم بیشتر از وقت اداری کار نکنم و در تعطیلات آخر هفته به ندرت به کار مشغول باشم.',
      imageUrl: '../../../assets/books/deep-work.jpg',
    },
    {
      id: 8,
      name: 'شازده کوچولو',
      price: 150000,
      inventory: 200,
      isbn: '978-3-16-148410-0',
      genere: 'کودکان',
      author: 'آنتوان دو سنت اگزوپری  ',
      translator: 'ابوالحسن نجفی',
      publisher: 'ماندگار',
      pubYear: 2012,
      gist:
        'عده‌ای از منتقدین بر این باور هستند که کتاب شازده کوچولو الهام گرفته شده از یکی از داستان‌های هانس کریستین اندرسون به نام پری دریایی کوچولو است. هانس کریستین اندرسون یکی از مشهورترین نویسندگان ادبیات کودک داستانی با این عنوان دارد. این باور از جایی می‌آید که هنگامی که اگزوپری به دلیل جراحت‌های بعد از سقوط در بیمارستان بستری بود، دوستش آنابلا برای او داستان پری دریایی کوچک را می‌خواند. منتقدین می‌گویند شاید بعد از شنیدن این قصه بوده است که اگزوپری تصمیم به نوشتن شازده کوچولو کرده است.',
      imageUrl: '../../../assets/books/little-prince.jpg',
    },
    {
      id: 9,
      name: 'آلیس در سرزمین عجایب',
      price: 220000,
      inventory: 400,
      isbn: '9786009817320',
      genere: 'نوجوان',
      author: '	لوئیس کارول',
      translator: 'مجید ریاحی',
      publisher: 'ماندگار',
      pubYear: 1925,
      gist:
        'شاهزاده خانم گفت: نتیجه می گیریم که عشق است که دنیا را می گرداند. آلیس یادش آمد که کسی گفته بود: (اگر همه آدم ها سرشان به کار خودشان گرم بود زمین بهتر دور خودش می چرخید.)',
      imageUrl: '../../../assets/books/alice-in-wondeland.png',
    },
  ];
  bookEmitter = new BehaviorSubject<Book[]>(this.books);

  constructor() {}

  getAllBooks() {
    return this.books.slice();
  }

  getBookById(i: number) {
    this.books.find((book) => book.id === i);
    this.bookEmitter.next(this.books);
  }

  returnBookById(i: number) {
    return this.books.find(book => book.id === i);
  }

  saveChanges(book: Book, id: number) {
    this.books[id] = book;
  }

  addBook(book: Book) {
    this.books.push(book);
    this.bookEmitter.next(this.books);
  }
}
