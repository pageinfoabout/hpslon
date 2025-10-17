import { useEffect, useState, useRef } from 'react'
import './App.css'
import {Toaster} from 'react-hot-toast'






const yclientsLink = 'https://n1266020.yclients.com/company/1157063/personal/menu?o='
const phoneNumber = '+79251188111'
const whatsappLink = 'https://api.whatsapp.com/send/?phone=79251188111&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%0A%0A%D0%9F%D0%B8%D1%88%D1%83+%D0%B8%D0%B7+%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F+2%D0%93%D0%98%D0%A1.%0A%0A&type=phone_number&app_absent=0'
const telegramChatLink = 'https://t.me/+79251188111'
const telegramChannelLink = 'https://t.me/hexinepogosyan'
const yandexOrgOid = '45383861918'
const yandexAddressText = 'ЖК Измайловский лес, Реутовская улица, 27, помещение 7; 1 этаж, Балашиха, Московская область, 143908'
const heroSlides = [
  '/photo1.png',
  '/photo2.png',
]
// Contact icons
const whatsappIcon = '/icons8-whatsapp.svg'
const telegramIcon = '/icons8-telegram-app.svg'
const galleryImages = [
  '/photo1.png',
  '/photo2.png',
  '/photo3.png',
  '/photo4.png',
  '/photo5.png',
]

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLaserOpen, setIsLaserOpen] = useState(false)
  const [isNailsOpen, setIsNailsOpen] = useState(false)
  const [isBrowsOpen, setIsBrowsOpen] = useState(false)
  const [isPedicureOpen, setIsPedicureOpen] = useState(false)
  const [isTrainingOpen, setIsTrainingOpen] = useState(false)
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [galleryStepPx, setGalleryStepPx] = useState(0)
  const galleryViewportRef = useRef(null)
  const [lightboxSrc, setLightboxSrc] = useState(null)
  // On smaller screens show a single full-width image; on desktop show three
  const VISIBLE_GALLERY = typeof window !== 'undefined' && window.innerWidth <= 960 ? 1 : 3
  const gallerySteps = Math.max(1, galleryImages.length) // for looping dots
  const laserServices = [
    { name: 'Тело полностью', time: '20 мин', price: '7,000 ₽' },
    { name: 'Тело полностью + лицо', time: '30 мин', price: '8,500 ₽' },
    { name: 'Верхняя губа (усики)', time: '5 мин', price: '650 ₽' },
    { name: 'Подбородок', time: '5 мин', price: '650 ₽' },
    { name: 'Нижняя часть лица', time: '5 мин', price: '1,000 ₽' },
    { name: 'Лоб', time: '5 мин', price: '1,000 ₽' },
    { name: 'Лицо полностью', time: '10 мин', price: '2,000 ₽' },
    { name: 'Шея полностью', time: '5 мин', price: '1,000 ₽' },
    { name: 'Подмышки', time: '10 мин', price: '1,500 ₽' },
    { name: 'Фаланги пальцев', time: '5 мин', price: '1,000 ₽' },
    { name: 'Руки от/до локтя + фаланги пальцев', time: '10 мин', price: '2,500 ₽' },
    { name: 'Руки полностью + фаланги пальцев', time: '10 мин', price: '3,500 ₽' },
    { name: 'Декольте', time: '5 мин', price: '2,000 ₽' },
    { name: 'Живот (белая линия)', time: '10 мин', price: '2,000 ₽' },
    { name: 'Живот полностью', time: '10 мин', price: '3,000 ₽' },
    { name: 'Спина верхняя/нижняя часть', time: '10 мин', price: '2,500 ₽' },
    { name: 'Спина полностью', time: '15 мин', price: '4,500 ₽' },
    { name: 'Ягодицы', time: '10 мин', price: '2,000 ₽' },
    { name: 'Бедра полностью', time: '10 мин', price: '3,500 ₽' },
    { name: 'Голени', time: '10 мин', price: '3,000 ₽' },
    { name: 'Ноги полностью', time: '15 мин', price: '5,500 ₽' },
    { name: 'Классическое бикини', time: '15 мин', price: '3,000 ₽' },
    { name: 'Глубокое бикини', time: '15 мин', price: '4,000 ₽' },
  ]
  const laserPromos = [
    { name: '2 зоны -5% скидка', time: '10 мин', note: 'При выборе любых 2 зон Вы получаете -5% от суммы' },
    { name: '3 зоны -10% скидка', time: '10 мин', note: 'При выборе любых 3 зон Вы получаете -10% от суммы' },
    { name: '5 зон -15% скидка', time: '15 мин', note: 'При выборе любых 5 зон Вы получаете -15% от суммы' },
  ]

  const [isHairOpen, setIsHairOpen] = useState(false)
  const hairGroups = [
    {
      title: 'ПАРИКМАХЕРСКИЙ ЗАЛ. Стрижки',
      items: [
        { name: 'Стиль/длина до 25 см (мытье, стрижка, сушка)', time: '1 ч', price: '2,400 ₽' },
        { name: 'Стиль/длина от 25 см (мытье, стрижка, сушка) +% за густоту', time: '1 ч', price: '2,900 ₽' },
        { name: 'Стиль/длина от 50 см (мытье, стрижка, сушка)', time: '1 ч 30 мин', price: '3,500 ₽' },
        { name: 'Один срез (мытье, стрижка, сушка) +% за густоту', time: '1 ч', price: '1,500 ₽' },
        { name: 'Один срез (без мытья головы) +20% за густоту', time: '30 мин', price: '1,000 ₽' },
        { name: 'Коррекция челки', time: '10 мин', price: '1,000 ₽' },
        { name: 'Фигурный выстриг +% за сложность', time: '30 мин', price: '200 ₽' },
        { name: '20% за густоту один срез', time: '5 мин', price: '300 ₽' },
      ],
    },
    {
      title: 'ПАРИКМАХЕРСКИЙ ЗАЛ. Укладки',
      items: [
        { name: 'Укладка дневная (короткие), фен (мытье, сушка, укладка)', time: '1 ч', price: '1,800 ₽' },
        { name: 'Укладка дневная (средние), фен (мытье, сушка, укладка)', time: '1 ч', price: '2,100 ₽' },
        { name: 'Укладка дневная (длинные), фен (мытье, сушка, укладка)', time: '1 ч', price: '2,800 ₽' },
        { name: 'Вечерняя укладка (+% за густоту и длину)', time: '1 ч 30 мин', price: '3,500 ₽' },
        { name: 'Укладка после процедуры', time: '5 мин', price: '1,000 ₽' },
        { name: 'Свадебная прическа', time: '1 ч 30 мин', price: '5,000 ₽' },
        { name: 'Прическа для невесты', time: '1 ч 30 мин', price: '6,500 ₽' },
        { name: 'Мытье головы + сушка', time: '20 мин', price: '1,000 ₽' },
        { name: 'Мытье головы (без сушки)', time: '15 мин', price: '500 ₽' },
      ],
    },
    {
      title: 'ПАРИКМАХЕРСКИЙ ЗАЛ. Тонирование',
      items: [
        { name: 'Экспресс-тонирование (короткие) ESTEL/LOREAL', time: '1 ч', price: '3,000 ₽' },
        { name: 'Экспресс-тонирование (средние) ESTEL/LOREAL', time: '1 ч', price: '4,000 ₽' },
        { name: 'Экспресс-тонирование (длинные) ESTEL/LOREAL', time: '1 ч', price: '5,000 ₽' },
      ],
    },
    {
      title: 'ПАРИКМАХЕРСКИЙ ЗАЛ. Окрашивание корней',
      items: [
        { name: 'Окрашивание корней, до 2 см, ESTEL', time: '1 ч', price: '3,500 ₽' },
        { name: 'Окрашивание корней, до 2 см, LOREAL', time: '1 ч 30 мин', price: '4,000 ₽' },
        { name: 'Окрашивание 1 пряди', time: '', price: '1,000 ₽' },
      ],
    },
    {
      title: 'ПАРИКМАХЕРСКИЙ ЗАЛ. Окрашивание / Тонирование ESTEL',
      items: [
        { name: 'Короткие', time: '1 ч 30 мин', price: '4,000 ₽' },
        { name: 'Средние', time: '1 ч 30 мин', price: '6,000 ₽' },
        { name: 'Длинные', time: '2 ч', price: '7,000 ₽' },
      ],
    },
    {
      title: 'ПАРИКМАХЕРСКИЙ ЗАЛ. Окрашивание / Тонирование LOREAL',
      items: [
        { name: 'Короткие', time: '1 ч 30 мин', price: '5,000 ₽' },
        { name: 'Средние', time: '1 ч 30 мин', price: '7,000 ₽' },
        { name: 'Длинные', time: '2 ч', price: '8,000 ₽' },
      ],
    },
    {
      title: 'ПАРИКМАХЕРСКИЙ ЗАЛ. Сложные техники окрашивания',
      items: [
        { name: 'ВЫХОД из черного (обязательная предварительная консультация!!!)', time: '20 мин', price: '' },
        { name: 'AIR TOUCH, ESTEL (+% за густоту)', time: '4 ч 30 мин', price: '13,000 ₽' },
        { name: 'AIR TOUCH, LOREAL (+% за густоту)', time: '4 ч 30 мин', price: '15,000 ₽' },
        { name: 'MIX ТЕХНИК, ESTEL (+% за густоту)', time: '5 ч', price: '12,000 ₽' },
        { name: 'MIX ТЕХНИК, LOREAL (+% за густоту)', time: '5 ч', price: '14,000 ₽' },
        { name: 'SHATUSH, ESTEL (+% за густоту)', time: '4 ч 30 мин', price: '12,000 ₽' },
        { name: 'SHATUSH, LOREAL (+% за густоту)', time: '4 ч 30 мин', price: '14,000 ₽' },
      ],
    },
    {
      title: 'ПАРИКМАХЕРСКИЙ ЗАЛ. Блондирование ESTEL',
      items: [
        { name: 'TOTAL BLOND / Смена имиджа (короткие)', time: '4 ч', price: '7,500 ₽' },
        { name: 'TOTAL BLOND / Смена имиджа (средние)', time: '5 ч', price: '9,000 ₽' },
        { name: 'TOTAL BLOND / Смена имиджа (длинные) +% за густоту', time: '6 ч', price: '12,000 ₽' },
      ],
    },
    {
      title: 'ПАРИКМАХЕРСКИЙ ЗАЛ. Блондирование LOREAL',
      items: [
        { name: 'TOTAL BLOND / Смена имиджа (короткие)', time: '4 ч', price: '8,500 ₽' },
        { name: 'TOTAL BLOND / Смена имиджа (средние)', time: '5 ч', price: '10,000 ₽' },
        { name: 'TOTAL BLOND / Смена имиджа (длинные) +% за густоту', time: '6 ч', price: '13,000 ₽' },
      ],
    },
    {
      title: 'ПАРИКМАХЕРСКИЙ ЗАЛ. Блондирование + Тонирование ESTEL',
      items: [
        { name: 'Корни 2 см — короткие', time: '3 ч 30 мин', price: '6,000 ₽' },
        { name: 'Корни 2 см — средние', time: '3 ч 30 мин', price: '7,000 ₽' },
        { name: 'Корни 2 см — длинные', time: '4 ч 30 мин', price: '8,000 ₽' },
      ],
    },
    {
      title: 'ПАРИКМАХЕРСКИЙ ЗАЛ. Блондирование + Тонирование LOREAL',
      items: [
        { name: 'Корни 2 см — короткие', time: '3 ч 30 мин', price: '7,500 ₽' },
        { name: 'Корни 2 см — средние', time: '3 ч 30 мин', price: '8,500 ₽' },
        { name: 'Корни 2 см — длинные', time: '4 ч 30 мин', price: '9,500 ₽' },
      ],
    },
    {
      title: 'ПАРИКМАХЕРСКИЙ ЗАЛ. Мелирование',
      items: [
        { name: 'Первичное ESTEL — короткие', time: '2 ч 40 мин', price: '7,500 ₽' },
        { name: 'Первичное ESTEL — средние', time: '3 ч', price: '8,500 ₽' },
        { name: 'Первичное ESTEL — длинные', time: '3 ч 30 мин', price: '9,500 ₽' },
        { name: 'Первичное LOREAL — короткие', time: '2 ч 40 мин', price: '8,500 ₽' },
        { name: 'Первичное LOREAL — средние', time: '3 ч', price: '10,000 ₽' },
        { name: 'Первичное LOREAL — длинные', time: '4 ч', price: '13,000 ₽' },
        { name: 'Прикорневое мелирование до 5 см, ESTEL (+% за густоту)', time: '1 ч', price: '7,500 ₽' },
        { name: 'Прикорневое мелирование до 5 см, LOREAL (+% за густоту)', time: '3 ч', price: '8,500 ₽' },
      ],
    },
    {
      title: 'ПАРИКМАХЕРСКИЙ ЗАЛ. Контуринг',
      items: [
        { name: 'ESTEL — средние', time: '2 ч 40 мин', price: '5,900 ₽' },
        { name: 'ESTEL — длинные', time: '3 ч', price: '6,900 ₽' },
        { name: 'LOREAL — средние', time: '2 ч 40 мин', price: '6,900 ₽' },
        { name: 'LOREAL — длинные', time: '3 ч', price: '7,900 ₽' },
      ],
    },
    {
      title: 'ПАРИКМАХЕРСКИЙ ЗАЛ. Уходы для волос',
      items: [
        { name: 'Абсолютное счастье для волос (короткие) LEBEL', time: '1 ч', price: '4,500 ₽' },
        { name: 'Абсолютное счастье для волос (средние) LEBEL', time: '1 ч', price: '5,500 ₽' },
        { name: 'Абсолютное счастье для волос (длинные) LEBEL', time: '1 ч', price: '6,500 ₽' },
        { name: 'Абсолютная энергия для волос / ЗАРЯДИ ESTEL', time: '1 ч 20 мин', price: '1,900 ₽' },
        { name: 'Счастье для волос (короткие) LEBEL', time: '1 ч', price: '3,500 ₽' },
        { name: 'Счастье для волос (средние) LEBEL', time: '1 ч', price: '4,500 ₽' },
        { name: 'Счастье для волос (длинные) LEBEL', time: '1 ч', price: '5,500 ₽' },
        { name: 'Глянцевание волос (средние) ESTEL', time: '1 ч 30 мин', price: '3,800 ₽' },
        { name: 'Глянцевание волос (длинные) ESTEL', time: '1 ч 30 мин', price: '5,500 ₽' },
        { name: 'Экстравосстановление волос / REMOUNT ESTEL', time: '1 ч 20 мин', price: '1,800 ₽' },
        { name: 'Absolut Repair / Vitamino / Curl Expression / Blondifier LOREAL', time: '1 ч', price: '2,200 ₽' },
        { name: 'Обертывание для волос / Цветочный Экстаз ESTEL', time: '1 ч 20 мин', price: '1,800 ₽' },
        { name: 'Коллагенотерапия для волос ESTEL', time: '1 ч 20 мин', price: '1,800 ₽' },
        { name: 'Кислородная реконструкция волос ESTEL', time: '50 мин', price: '1,800 ₽' },
        { name: 'Metal Detox LOREAL', time: '1 ч', price: '2,400 ₽' },
        { name: 'Кератин (короткие)', time: '2 ч', price: '4,500 ₽' },
        { name: 'Кератин (средние)', time: '3 ч', price: '7,000 ₽' },
        { name: 'Кератин (длина 60–65 см)', time: '4 ч', price: '12,000 ₽' },
        { name: 'Пилинг для кожи головы', time: '10 мин', price: '500 ₽' },
        { name: 'Солнечные блики (прядь)', time: '5 мин', price: '500 ₽' },
        { name: 'Инфракрасный утюжок к уходам ESTEL', time: '20 мин', price: '500 ₽' },
        { name: 'Трихоскопия (компьютерная диагностика)', time: '15 мин', price: '1,200 ₽' },
        { name: 'Консультация', time: '15 мин', price: '' },
      ],
    },
    {
      title: 'ПАРИКМАХЕРСКИЙ ЗАЛ. Все включено (окрашивание + уход + стрижка)',
      items: [
        { name: 'ESTEL — короткие', time: '2 ч', price: '6,600 ₽' },
        { name: 'ESTEL — средние', time: '3 ч', price: '7,600 ₽' },
        { name: 'ESTEL — длинные', time: '3 ч', price: '8,600 ₽' },
        { name: 'LOREAL — короткие', time: '3 ч', price: '8,100 ₽' },
        { name: 'LOREAL — средние', time: '3 ч', price: '9,100 ₽' },
        { name: 'LOREAL — длинные', time: '3 ч 30 мин', price: '10,100 ₽' },
      ],
    },
  ]

  const nailServices = [
    { name: 'Чужое снятие', time: '', price: '600 ₽' },
    { name: 'Снятие лака', time: '15 мин', price: '100 ₽' },
    { name: 'Снятие геля/укрепления', time: '5 мин', price: '500 ₽' },
    { name: 'Снятие гель-лака', time: '15 мин', price: '300 ₽' },
    { name: 'Снятие нарощенных ногтей', time: '20 мин', price: '1,000 ₽' },
    { name: 'Снятие + Маникюр + Покрытие + Выравнивание ногтевой пластины', time: '1 ч 30 мин', price: '2,500 ₽' },
    { name: 'Апаратный маникюр', time: '30 мин', price: '1,100 ₽' },
    { name: 'Японский маникюр', time: '30 мин', price: '2,000 ₽' },
    { name: 'Японская полировка', time: '15 мин', price: '1,000 ₽' },
    { name: 'Полировка ногтевой пластины', time: '5 мин', price: '300 ₽' },
    { name: 'Покрытие гель-лаком Luxio', time: '45 мин', price: '1,300 ₽' },
    { name: 'Покрытие Кошачий глаз', time: '5 мин', price: '300 ₽' },
    { name: 'Покрытие лак', time: '10 мин', price: '700 ₽' },
    { name: 'Лечебное покрытие', time: '5 мин', price: '200 ₽' },
    { name: 'Покрытие French гель-лаком', time: '40 мин', price: '500 ₽' },
    { name: 'Укрепление каучуковой базой (для хрупких ногтей)', time: '5 мин', price: '500 ₽' },
    { name: 'Укрепление ногтевой пластины твердым гелем', time: '30 мин', price: '1,000 ₽' },
    { name: 'Матовый топ', time: '5 мин', price: '150 ₽' },
    { name: 'Массаж рук', time: '10 мин', price: '500 ₽' },
    { name: 'SPA-уход Руки ( горячий парафин)', time: '30 мин', price: '500 ₽' },
    { name: 'Стразы', time: '5 мин', price: '50 ₽' },
    { name: 'Наклейки на ногти', time: '5 мин', price: '100 ₽' },
    { name: 'Дизайн простой (1 ноготь)', time: '10 мин', price: '100 ₽' },
    { name: 'Дизайн сложный (1 ноготь)', time: '15 мин', price: '200 ₽' },
    { name: 'Аэрография/Градиент', time: '5 мин', price: '800 ₽' },
    { name: 'Втирка', time: '10 мин', price: '700 ₽' },
    { name: 'Наращивание одного ногтя', time: '15 мин', price: '350 ₽' },
    { name: 'Ремонт/укрепление 1-ого ногтя (акрил/пудра)', time: '10 мин', price: '150 ₽' },
    { name: 'Ремонт 1-го ногтя ( снятие, ремонт, перекрытие)', time: '15 мин', price: '350 ₽' },
    { name: 'Коррекция/моделирование формы ногтей', time: '10 мин', price: '200 ₽' },
  ]
  const pedicureServices = [
    { name: 'Мужской маникюр', time: '45 мин', price: '1,500 ₽' },
    { name: 'Мужской японский маникюр', time: '45 мин', price: '2,000 ₽' },
    { name: 'Мужской аппаратный маникюр', time: '45 мин', price: '1,500 ₽' },
    { name: 'Мужской-SMART педикюр, обработка пяток', time: '45 мин', price: '1,900 ₽' },
    { name: 'Мужской SMART педикюр', time: '45 мин', price: '2,700 ₽' },
    { name: 'Мужской SPA для рук (горячий парафин)', time: '45 мин', price: '800 ₽' },
    { name: 'Мужское лечебное покрытие', time: '15 мин', price: '300 ₽' },
    { name: 'Матовый топ', time: '30 мин', price: '300 ₽' },
    { name: 'Японская полировка', time: '45 мин', price: '1,200 ₽' },
    { name: 'Мужской SPA для ног (горячий парафин)', time: '45 мин', price: '1,200 ₽' },
    { name: 'Мужской массаж ног', time: '45 мин', price: '1,200 ₽' },
    { name: 'Полировка ногтевой пластины', time: '45 мин', price: '500 ₽' },
    { name: 'Мужской массаж рук', time: '45 мин', price: '800 ₽' },
    { name: 'Экспресс педикюр (пальчики)', time: '45 мин', price: '1,200 ₽' },
    { name: 'Обработка одного вросшего ногтя', time: '45 мин', price: '300 ₽' },
  ]
  const trainingServices = [
    { name: 'Наращивание ресниц с нуля', time: '', price: '45,000 – 70,000 ₽' },
    { name: 'Наращивание ресниц (повышение квалификации)', time: '', price: '35,000 ₽' },
    { name: 'Наращивание ресниц (почасово)', time: '3 ч', price: '5,000 ₽' },
    { name: 'Наращивание волос (холодная/горячая техника)', time: '', price: '60,000 ₽' },
  ]
  const browServices = [
    { name: 'Коррекция бровей (воском/пинцетом)', time: '15 мин', price: '750 ₽' },
    { name: 'Окрашивание бровей (краской)', time: '15 мин', price: '750 ₽' },
    { name: 'Коррекция + окрашивание бровей', time: '1 ч', price: '1,500 ₽' },
    { name: 'Ламинирование бровей ( создание формы, окрашивание, уход, ламинирование)', time: '1 ч', price: '2,400 ₽' },
    { name: 'Ламинирование ресниц (долговременная укладка,окрашивание, уход - Ботокс)', time: '1 ч', price: '2,400 ₽' },
    { name: 'Полный комплекс (ламинирование бровей и ресниц, окрашивание,уход)', time: '2 ч', price: '3,800 ₽' },
    { name: 'Комплекс ( ламинирование ресниц + коррекция бровей ) уход в подарок', time: '1 ч', price: '2,700 ₽' },
    { name: 'Комплекс ( ламинирование ресниц + коррекция, окрашивание бровей)', time: '1 ч 20 мин', price: '3,100 ₽' },
    { name: 'Депиляция воском верхнй губы', time: '15 мин', price: '600 ₽' },
    { name: 'Окрашивание ресниц', time: '15 мин', price: '750 ₽' },
    { name: 'Ботокс уход', time: '10 мин', price: '500 ₽' },
  ]
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const updateStep = () => {
      if (!galleryViewportRef.current) return
      const viewportWidth = galleryViewportRef.current.clientWidth
      const GAP = 24
      const visible = window.innerWidth <= 960 ? 1 : 3
      setGalleryStepPx(viewportWidth / visible + (window.innerWidth <= 960 ? 12 : GAP))
    }
    updateStep()
    window.addEventListener('resize', updateStep)
    return () => window.removeEventListener('resize', updateStep)
  }, [])

  useEffect(() => {
    if (!lightboxSrc) return
    const onKey = e => { if (e.key === 'Escape') setLightboxSrc(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxSrc])

  useEffect(() => {
    if (!isLaserOpen && !isNailsOpen && !isHairOpen && !isPedicureOpen && !isBrowsOpen && !isTrainingOpen) return
    const onKey = e => { if (e.key === 'Escape') { setIsLaserOpen(false); setIsNailsOpen(false); setIsHairOpen(false); setIsPedicureOpen(false); setIsBrowsOpen(false); setIsTrainingOpen(false) } }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isLaserOpen, isNailsOpen, isHairOpen, isPedicureOpen, isBrowsOpen, isTrainingOpen])

  const currentYear = new Date().getFullYear()
  const yandexMapSrc = yandexOrgOid
    ? `https://yandex.ru/map-widget/v1/?ol=biz&oid=${encodeURIComponent(yandexOrgOid)}&z=17&lang=ru_RU`
    : `https://yandex.ru/map-widget/v1/?mode=search&text=${encodeURIComponent('Лаборатория красоты h.p., ' + yandexAddressText)}&z=17&lang=ru_RU`

  return (
    <>
    
      <header className="header">
        <div className="container nav">
          <a href="#hero" className="brand" aria-label="На главную">
            <img src="/logo7.png" alt="Лаборатория красоты h.p." className="brand-mark" />
          </a>
          <nav className="nav-links" aria-label="Основная навигация">
            <a href="#services">Услуги</a>
            <a href="#team">Команда</a>
            <a href="#about">О нас</a>
            <a href="#reviews">Отзывы</a>
            <a href="#contacts">Контакты</a>
          </nav>
          <div className="nav-cta">
            <a className="btn" href={yclientsLink} target="_blank" rel="noreferrer noopener">Записаться</a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section id="hero" className="section hero">
          <div className="hero-bg" aria-hidden="true">
            {heroSlides.map((src, i) => (
              <img key={src} src={src} alt="" className={i === currentSlide ? 'is-active' : ''} />
            ))}
          </div>
          <div className="container hero-inner reveal">
            <img src="/logo55.png" alt="Лаборатория красоты — логотип" className="hero-logo" />
            <p className="muted hero-sub">Пространство красоты, уюта и стиля для вас</p>
            <div className="hero-actions">
              <a className="btn" href={yclientsLink} target="_blank" rel="noreferrer noopener">Записаться</a>
              <a className="btn white" href="#services">Посмотреть услуги</a>
            </div>
          </div>
        </section>

        {/* Наша команда */}
        <section id="team" className="section">
          <div className="container">
            <div className="section-head reveal">
              <h2 className="display-serif">Наша команда</h2>
              <p className="muted">Опытные специалисты, которые заботятся о вашей красоте</p>
            </div>
            <div className="grid-3 team-grid">
              {[
                { name: 'Наташа', photo: '/5cebb2f072b19b14ec04484f30a11b8d.jpg', desc: 'Стилист по волосам. Современные стрижки и укладки.' },
                { name: 'Надя', photo: '/4e5d84e967cdf19ece54aaa281220669.jpg', desc: 'Мастер маникюра. Аккуратность, стойкое покрытие, забота об уходе.' },
                { name: 'Оля', photo: '/c25c6803b91ac53b8419e56bef8ca77d.jpg', desc: 'Колорист. Индивидуальные решения и бережные техники окрашивания.' },
              ].map((m, i) => (
                <article key={m.name} className="card team-card reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className="team-photo-box">
                    <img className="team-photo" src={m.photo} alt={m.name} loading="lazy" decoding="async" />
                  </div>
                  <div className="card-body">
                    <h3 className="team-name">{m.name}</h3>
                    <p className="muted team-desc">{m.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Базовые услуги */}
        <section id="services" className="section">
          <div className="container">
            <div className="section-head reveal">
              <h2 className="display-serif">Базовые услуги</h2>
              <p className="muted">Популярные процедуры для идеального образа</p>
            </div>
            <div className="grid-4 services-grid">
              {[
                { title: 'Лазерная эпиляция', desc: 'Комфортная и эффективная эпиляция.', img: '/striga.jpg', onClick: () => setIsLaserOpen(true) },
                { title: 'Окрашивание', desc: 'Современные техники и щадящие формулы.', img: '/okrashivanie.png', onClick: () => setIsHairOpen(true) },
                { title: 'Маникюр', desc: 'Комфортный уход и безупречное покрытие.', img: '/nogti.png', onClick: () => setIsNailsOpen(true) },
                { title: 'Брови и ресницы', desc: 'Коррекция, окрашивание, ламинирование.', img: '/brovi.png', onClick: () => setIsBrowsOpen(true) },
              ].map((s, i) => (
                <article
                  key={s.title}
                  className="card service-card reveal"
                  style={{ transitionDelay: `${i * 60}ms` }}
                  onClick={s.onClick}
                  role={s.onClick ? 'button' : undefined}
                  tabIndex={s.onClick ? 0 : undefined}
                  onKeyDown={e => { if (s.onClick && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); s.onClick() } }}
                >
                  <img src={s.img} alt={s.title} className="card-photo" loading="lazy" decoding="async" />
                  <div className="card-body">
                    <h3>{s.title}</h3>
                    <p className="muted">{s.desc}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="grid-4 services-grid" style={{ marginTop: 24 }}>
              {[
                { title: 'Мужской маникюр - педикюр', desc: 'Уход и комфорт для ваших ног.', img: '/d7c3bac7d01941c089c13d4acf0473de.jpg', onClick: () => setIsPedicureOpen(true) },
                { title: 'Обучение', desc: 'Курсы и повышение квалификации.', img: '/a5ee5fcdeaea777e0d8b69b74082c204.jpg', onClick: () => setIsTrainingOpen(true) },
              ].map((s, i) => (
                <article
                  key={s.title}
                  className="card service-card reveal"
                  style={{ transitionDelay: `${i * 60}ms` }}
                  onClick={s.onClick}
                  role={s.onClick ? 'button' : undefined}
                  tabIndex={s.onClick ? 0 : undefined}
                  onKeyDown={e => { if (s.onClick && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); s.onClick() } }}
                >
                  <img src={s.img} alt={s.title} className="card-photo" loading="lazy" decoding="async" />
                  <div className="card-body">
                    <h3>{s.title}</h3>
                    <p className="muted">{s.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Галерея интерьера */}
        <section id="gallery" className="section">
          <div className="container">
            <div className="section-head reveal">
              <h2 className="display-serif">Галерея интерьера</h2>
              <p className="muted">Атмосфера, в которую хочется возвращаться</p>
            </div>
            <div className="gallery-wrap">
              <button
                type="button"
                className="gallery-arrow left"
                aria-label="Предыдущие фото"
                onClick={() => setGalleryIndex(prev => (prev - 1 + galleryImages.length) % galleryImages.length)}
              >
                ‹
              </button>
              <div className="gallery-viewport" ref={galleryViewportRef}>
                <div
                  className="gallery-track"
                  style={{ transform: `translateX(-${(galleryIndex % galleryImages.length) * galleryStepPx}px)` }}
                >
                  {[...galleryImages, ...galleryImages.slice(0, VISIBLE_GALLERY - 1)].map((src, i) => (
                    <div
                      key={`${src}-${i}`}
                      className="gallery-item"
                      role="button"
                      tabIndex={0}
                      onClick={() => setLightboxSrc(src)}
                      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setLightboxSrc(src) } }}
                    >
                      <img src={src} alt={`Интерьер ${i + 1}`} loading="lazy" decoding="async" />
                    </div>
                  ))}
                </div>
              </div>
              <button
                type="button"
                className="gallery-arrow right"
                aria-label="Следующие фото"
                onClick={() => setGalleryIndex(prev => (prev + 1) % galleryImages.length)}
              >
                ›
              </button>
              <div className="gallery-dots">
                {Array.from({ length: gallerySteps }).map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`gallery-dot${idx === galleryIndex ? ' active' : ''}`}
                    aria-label={`Перейти к фото ${idx + 1}`}
                    onClick={() => setGalleryIndex(idx)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Почему выбирают нас */}
        <section id="benefits" className="section">
          <div className="container">
            <div className="section-head reveal">
              <h2 className="display-serif">Почему выбирают нас</h2>
            </div>
            <div className="grid-4 features-grid">
              {[
                { title: 'Профессиональные мастера', text: 'Постоянное обучение и опыт.' },
                { title: 'Сертифицированная косметика', text: 'Надёжные бренды и уход.' },
                { title: 'Уютная атмосфера', text: 'Комфорт и внимание к деталям.' },
                { title: 'Индивидуальный подход', text: 'Подбираем решения под ваши цели.' },
              ].map((f, i) => (
                <div key={f.title} className="feature card reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                  <h3>{f.title}</h3>
                  <p className="muted">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        

        {/* О нас */}
        <section id="about" className="section">
          <div className="container grid-2 about-grid">
            <div className="reveal">
              <h2 className="display-serif">О нас</h2>
              <p className="muted">История, ценности и подход. Мы создаём пространство, где качество сервиса сочетается с тёплой атмосферой и вниманием к деталям.</p>
              <p className="muted">Наша команда — мастера своего дела. Мы работаем с сертифицированной косметикой и современными методиками.</p>
            </div>
            <div className="reveal">
              <img src="/laba.png" alt="Интерьер салона" className="about-photo" />
            </div>
          </div>
        </section>

        {/* Отзывы */}
        <section id="reviews" className="section">
          <div className="container">
            <div className="section-head reveal">
              <h2 className="display-serif">Отзывы</h2>
            </div>
            <div className="grid-3 reviews-grid">
              {[
                { name: 'Анастасия', text: 'Отличная атмосфера и внимательные мастера. Вернусь снова!' },
                { name: 'Марина', text: 'Сделали идеальное окрашивание. Спасибо за заботу и совет по уходу!' },
                { name: 'Екатерина', text: 'Маникюр и брови на высоте. Всё чисто и аккуратно.' },
              ].map((r, i) => (
                <figure key={r.name} className="card review-card reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                  <blockquote>“{r.text}”</blockquote>
                  <figcaption className="muted">{r.name}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Новости */}
        <section id="news" className="section">
          <div className="container">
            <div className="section-head reveal">
              <h2 className="display-serif">Новости</h2>
              <p className="muted">Новые процедуры, акции и сезонные предложения</p>
            </div>
            <div className="grid-3 news-grid">
              {[
                { title: 'Сезонное окрашивание', text: 'Новые оттенки и уходовые комплексы.' },
                { title: 'Скидка на уходы', text: 'Весь месяц —15% на программы восстановления.' },
                { title: 'Команда растёт', text: 'Присоединился топ-мастер по маникюру.' },
              ].map((n, i) => (
                <article key={n.title} className="card reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className="card-body">
                    <h3>{n.title}</h3>
                    <p className="muted">{n.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Контакты */}
        <section id="contacts" className="section">
          <div className="container">
            <div className="section-head reveal">
              <h2 className="display-serif">Контакты</h2>
      </div>
            <div className="grid-2 contacts-grid">
              <div className="reveal">
                <div className="contact-card card">
                  <h3>Адрес</h3>
                  <p>
                    ЖК Измайловский лес<br />
                    Реутовская улица, 27, помещение 7; 1 этаж<br />
                    Балашиха, Московская область, 143908
                  </p>
                  <h3>Время работы</h3>
                  <p className="muted">Ежедневно: 10:00–21:00</p>
                  <h3>Связаться</h3>
                  <ul className="contact-list">
                    <li>
                      <a href={`tel:${phoneNumber}`} className="btn secondary">Позвонить</a>
                    </li>
                    <li>
                      <a href={whatsappLink} target="_blank" rel="noreferrer noopener" className="btn secondary"><img className="btn-icon colored" src={whatsappIcon} alt="" aria-hidden="true" onError={e => (e.currentTarget.style.display='none')} />WhatsApp</a>
                    </li>
                    <li>
                      <a href={telegramChatLink} target="_blank" rel="noreferrer noopener" className="btn secondary"><img className="btn-icon colored" src={telegramIcon} alt="" aria-hidden="true" onError={e => (e.currentTarget.style.display='none')} />Написать в Telegram</a>
                    </li>
                  </ul>
                  <div className="social-links">
                    <a href={telegramChannelLink} target="_blank" rel="noreferrer noopener">Telegram канал</a>
                  </div>
                  <div className="contact-cta">
                    <a className="btn" href={yclientsLink} target="_blank" rel="noreferrer noopener">Записаться</a>
                  </div>
                </div>
              </div>
              <div className="reveal">
                <div className="map-embed card">
                  <iframe
                    title="Карта — ЖК Измайловский лес"
                    src={yandexMapSrc}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {isLaserOpen && (
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="laser-title" onClick={() => setIsLaserOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" aria-label="Закрыть" onClick={() => setIsLaserOpen(false)}>✕</button>
            <div className="modal-hero">
              <img src="/striga.jpg" alt="Лазерная эпиляция" />
            </div>
            <div className="modal-body">
              <h3 id="laser-title" className="display-serif">Лазерная эпиляция</h3>
              <ul className="service-list">
                {laserServices.map(item => (
                  <li key={item.name} className="service-row">
                    <span className="service-name">{item.name}</span>
                    <span className="service-time muted">{item.time}</span>
                    <span className="service-price">{item.price}</span>
                  </li>
                ))}
              </ul>
              <div className="promo-list">
                {laserPromos.map(p => (
                  <div key={p.name} className="promo-item">
                    <div className="promo-line">
                      <span className="promo-name">{p.name}</span>
                      <span className="promo-time muted">{p.time}</span>
                    </div>
                    <div className="promo-note muted">{p.note}</div>
                  </div>
                ))}
              </div>
              <div className="modal-footer">
                <a className="btn" href={yclientsLink} target="_blank" rel="noreferrer noopener">Записаться</a>
              </div>
            </div>
          </div>
        </div>
      )}

      {lightboxSrc && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setLightboxSrc(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" aria-label="Закрыть" onClick={() => setLightboxSrc(null)}>✕</button>
            <img className="lightbox-img" src={lightboxSrc} alt="Просмотр фото" />
          </div>
        </div>
      )}

      {isNailsOpen && (
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="nails-title" onClick={() => setIsNailsOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" aria-label="Закрыть" onClick={() => setIsNailsOpen(false)}>✕</button>
            <div className="modal-hero">
              <img src="/nogti.png" alt="Маникюр" />
            </div>
            <div className="modal-body">
              <h3 id="nails-title" className="display-serif">Маникюр</h3>
              <ul className="service-list">
                {nailServices.map(item => (
                  <li key={item.name} className="service-row">
                    <span className="service-name">{item.name}</span>
                    <span className="service-time muted">{item.time}</span>
                    <span className="service-price">{item.price}</span>
                  </li>
                ))}
              </ul>
              <div className="modal-footer">
                <a className="btn" href={yclientsLink} target="_blank" rel="noreferrer noopener">Записаться</a>
              </div>
            </div>
          </div>
        </div>
      )}

      {isPedicureOpen && (
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="pedicure-title" onClick={() => setIsPedicureOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" aria-label="Закрыть" onClick={() => setIsPedicureOpen(false)}>✕</button>
            <div className="modal-hero">
              <img src="/d7c3bac7d01941c089c13d4acf0473de.jpg" alt="Мужской педикюр" />
            </div>
            <div className="modal-body">
              <h3 id="pedicure-title" className="display-serif">Мужской маникюр - педикюр</h3>
              <ul className="service-list">
                {pedicureServices.map(item => (
                  <li key={item.name} className="service-row">
                    <span className="service-name">{item.name}</span>
                    <span className="service-time muted">{item.time}</span>
                    <span className="service-price">{item.price}</span>
                  </li>
                ))}
              </ul>
              <div className="modal-footer">
                <a className="btn" href={yclientsLink} target="_blank" rel="noreferrer noopener">Записаться</a>
              </div>
            </div>
          </div>
        </div>
      )}

      {isHairOpen && (
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="hair-title" onClick={() => setIsHairOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" aria-label="Закрыть" onClick={() => setIsHairOpen(false)}>✕</button>
            <div className="modal-hero">
              <img src="/okrashivanie.png" alt="Парикмахерский зал" />
            </div>
            <div className="modal-body">
              <h3 id="hair-title" className="display-serif">Парикмахерский зал</h3>
              {hairGroups.map(group => (
                <div key={group.title} className="hair-group">
                  <h4>{group.title}</h4>
                  <ul className="service-list">
                    {group.items.map(item => (
                      <li key={item.name} className="service-row">
                        <span className="service-name">{item.name}</span>
                        <span className="service-time muted">{item.time}</span>
                        <span className="service-price">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="modal-footer">
                <a className="btn" href={yclientsLink} target="_blank" rel="noreferrer noopener">Записаться</a>
              </div>
            </div>
          </div>
        </div>
      )}

      {isTrainingOpen && (
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="training-title" onClick={() => setIsTrainingOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" aria-label="Закрыть" onClick={() => setIsTrainingOpen(false)}>✕</button>
            <div className="modal-hero">
              <img src="/a5ee5fcdeaea777e0d8b69b74082c204.jpg" alt="Обучение" />
            </div>
            <div className="modal-body">
              <h3 id="training-title" className="display-serif">Обучение</h3>
              <ul className="service-list">
                {trainingServices.map(item => (
                  <li key={item.name} className="service-row">
                    <span className="service-name">{item.name}</span>
                    <span className="service-time muted">{item.time}</span>
                    <span className="service-price">{item.price}</span>
                  </li>
                ))}
              </ul>
              <div className="modal-footer">
                <a className="btn" href={yclientsLink} target="_blank" rel="noreferrer noopener">Записаться</a>
              </div>
            </div>
          </div>
        </div>
      )}

      {isBrowsOpen && (
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="brows-title" onClick={() => setIsBrowsOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" aria-label="Закрыть" onClick={() => setIsBrowsOpen(false)}>✕</button>
            <div className="modal-hero">
              <img src="/brovi.png" alt="Брови и ресницы" />
            </div>
            <div className="modal-body">
              <h3 id="brows-title" className="display-serif">Брови и ресницы</h3>
              <ul className="service-list">
                {browServices.map(item => (
                  <li key={item.name} className="service-row">
                    <span className="service-name">{item.name}</span>
                    <span className="service-time muted">{item.time}</span>
                    <span className="service-price">{item.price}</span>
                  </li>
                ))}
              </ul>
              <div className="modal-footer">
                <a className="btn" href={yclientsLink} target="_blank" rel="noreferrer noopener">Записаться</a>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="footer">
        <div className="container footer-inner">
          <nav className="footer-nav" aria-label="Нижняя навигация">
            <a href="#services">Услуги</a>
            <a href="#about">О нас</a>
            <a href="#reviews">Отзывы</a>
            <a href="#contacts">Контакты</a>
          </nav>
          <div className="footer-meta">
            <a href="#privacy" className="muted">Политика конфиденциальности</a>
            <span className="muted">© {currentYear}. Все права защищены. Обработка персональных данных.</span>
          </div>
        </div>
      </footer>

      <section id="privacy" className="section" aria-hidden="true" style={{ display: 'none' }}>
        <div className="container">
          <h2 className="display-serif">Политика конфиденциальности</h2>
          <p className="muted">Текст политики будет добавлен позже.</p>
      </div>
      </section>
    </>
  )
}

export default App
