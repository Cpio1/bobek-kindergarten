import type { SectionId } from "@/config/site";

export type Locale = "kz" | "ru";

type Dictionary = {
  nav: Record<SectionId, string>;
  header: { contact: string; openMenu: string; closeMenu: string; language: string };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    contact: string;
    about: string;
    photoAlt: string;
  };
  stats: { age: string; groups: string; meals: string; hours: string };
  about: {
    eyebrow: string;
    title: string;
    text: string;
    photoAlt: string;
    cards: { title: string; text: string }[];
  };
  info: {
    eyebrow: string;
    title: string;
    subtitle: string;
    hours: { label: string; note: string };
    groups: { label: string; note: string };
    age: { label: string; value: string; note: string };
    language: { label: string; value: string; note: string };
    meals: { label: string; value: string; note: string };
    address: { label: string; note: string };
  };
  gallery: {
    eyebrow: string;
    title: string;
    subtitle: string;
    more: string;
    less: string;
    empty: string;
    open: string;
    close: string;
    prev: string;
    next: string;
    photo: string;
  };
  documents: {
    eyebrow: string;
    title: string;
    text: string;
    button: string;
    soon: string;
  };
  contacts: {
    eyebrow: string;
    title: string;
    subtitle: string;
    address: string;
    phones: string;
    instagram: string;
    hours: string;
    call: string;
    instagramBtn: string;
    map: string;
    mapTitle: string;
  };
  footer: { description: string; sections: string; contacts: string; rights: string };
};

export const translations: Record<Locale, Dictionary> = {
  kz: {
    nav: {
      home: "Басты бет",
      about: "Біз туралы",
      info: "Ақпарат",
      gallery: "Галерея",
      documents: "Құжаттар",
      contacts: "Байланыс",
    },
    header: {
      contact: "Байланысу",
      openMenu: "Мәзірді ашу",
      closeMenu: "Мәзірді жабу",
      language: "Тілді таңдау",
    },
    hero: {
      eyebrow: "Бөбек бөбекжай балабақшасы",
      title: "Бақытты балалық шақ осы жерден басталады!",
      subtitle:
        "Балаңыздың дамуы мен тәрбиесіне арналған жайлы әрі мейірімді орта",
      contact: "Байланысу",
      about: "Біз туралы",
      photoAlt: "«Бөбек» балабақшасы",
    },
    stats: {
      age: "жас",
      groups: "топ",
      meals: "мезгіл тамақтану",
      hours: "жұмыс уақыты",
    },
    about: {
      eyebrow: "Біз туралы",
      title: "«Бөбек» — балалық шақтың бақытты мекені",
      text: "«Бөбек» бөбекжай балабақшасы — балалардың жан-жақты дамуына, тәрбиесіне және жайлы ортада өсуіне көңіл бөлетін мектепке дейінгі мекеме. Біздің мақсатымыз — әр баланың қабілетін ашуға, жаңа білім алуға және қоршаған ортаны тануға қолайлы жағдай жасау.",
      photoAlt: "«Бөбек» балабақшасының фотосуреті",
      cards: [
        { title: "Мейірімді орта", text: "Әр балаға қамқорлық пен жылы көңіл" },
        { title: "Балалардың дамуы", text: "Жаңа білім мен қабілеттерді ашу" },
        { title: "Жайлы балабақша", text: "Ойнауға және өсуге қолайлы жағдай" },
      ],
    },
    info: {
      eyebrow: "Ақпарат",
      title: "Ата-аналарға арналған негізгі ақпарат",
      subtitle: "Балабақша туралы маңызды мәліметтер бір жерде",
      hours: { label: "Жұмыс уақыты", note: "Балабақшаның жұмыс уақыты" },
      groups: { label: "Топ саны", note: "Балабақшадағы топтар" },
      age: { label: "Балалардың жасы", value: "2–5 жас", note: "Бөбекжай және балабақша жасы" },
      language: { label: "Оқыту тілі", value: "Қазақша", note: "Тәрбие мен оқыту қазақ тілінде" },
      meals: { label: "Тамақтану", value: "Күніне 4 рет", note: "Тұрақты тамақтану тәртібі" },
      address: { label: "Мекенжай", note: "Іле ауданы, Алматы облысы" },
    },
    gallery: {
      eyebrow: "Галерея",
      title: "Балабақша өмірінен сәттер",
      subtitle: "«Бөбек» балабақшасының күнделікті өмірі суреттерде",
      more: "Тағы көрсету",
      less: "Жасыру",
      empty: "Фотосуреттер жақында қосылады",
      open: "Суретті үлкейту",
      close: "Жабу",
      prev: "Алдыңғы сурет",
      next: "Келесі сурет",
      photo: "Балабақша фотосуреті",
    },
    documents: {
      eyebrow: "Құжаттар",
      title: "Балабақша құжаттары",
      text: "Балабақшаға қатысты ресми құжаттармен төмендегі сілтеме арқылы таныса аласыз.",
      button: "Құжаттарды қарау",
      soon: "Құжаттар сілтемесі жақында қосылады",
    },
    contacts: {
      eyebrow: "Байланыс",
      title: "Бізбен байланысыңыз",
      subtitle: "Сұрақтарыңыз болса, қоңырау шалыңыз немесе Instagram арқылы жазыңыз",
      address: "Мекенжай",
      phones: "Телефондар",
      instagram: "Instagram",
      hours: "Жұмыс уақыты",
      call: "Қоңырау шалу",
      instagramBtn: "Instagram",
      map: "Картадан көру",
      mapTitle: "«Бөбек» балабақшасының картадағы орны",
    },
    footer: {
      description:
        "Балаңыздың дамуы мен тәрбиесіне арналған жайлы әрі мейірімді орта.",
      sections: "Бөлімдер",
      contacts: "Байланыс",
      rights: "Барлық құқықтар қорғалған.",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      about: "О садике",
      info: "Информация",
      gallery: "Галерея",
      documents: "Документы",
      contacts: "Контакты",
    },
    header: {
      contact: "Связаться",
      openMenu: "Открыть меню",
      closeMenu: "Закрыть меню",
      language: "Выбор языка",
    },
    hero: {
      eyebrow: "Детский ясли-сад «Бөбек»",
      title: "Счастливое детство начинается здесь!",
      subtitle:
        "Уютная и доброжелательная среда для развития и воспитания вашего ребёнка",
      contact: "Связаться",
      about: "О садике",
      photoAlt: "Детский сад «Бөбек»",
    },
    stats: {
      age: "лет",
      groups: "группы",
      meals: "приёма пищи в день",
      hours: "режим работы",
    },
    about: {
      eyebrow: "О садике",
      title: "«Бөбек» — счастливый дом детства",
      text: "Детский ясли-сад «Бөбек» — дошкольное учреждение, которое уделяет внимание всестороннему развитию, воспитанию детей и их росту в уютной среде. Наша цель — создать благоприятные условия, чтобы раскрыть способности каждого ребёнка, получать новые знания и познавать окружающий мир.",
      photoAlt: "Фотография детского сада «Бөбек»",
      cards: [
        { title: "Доброжелательная среда", text: "Забота и тепло для каждого ребёнка" },
        { title: "Развитие детей", text: "Новые знания и раскрытие способностей" },
        { title: "Уютный детский сад", text: "Комфортные условия для игр и роста" },
      ],
    },
    info: {
      eyebrow: "Информация",
      title: "Главное для родителей",
      subtitle: "Важные сведения о детском саде в одном месте",
      hours: { label: "Режим работы", note: "Время работы детского сада" },
      groups: { label: "Количество групп", note: "Группы в детском саду" },
      age: { label: "Возраст детей", value: "2–5 лет", note: "Ясельный и дошкольный возраст" },
      language: { label: "Язык обучения", value: "Казахский", note: "Воспитание и обучение на казахском языке" },
      meals: { label: "Питание", value: "4 раза в день", note: "Регулярный режим питания" },
      address: { label: "Адрес", note: "Илийский район, Алматинская область" },
    },
    gallery: {
      eyebrow: "Галерея",
      title: "Моменты из жизни садика",
      subtitle: "Повседневная жизнь детского сада «Бөбек» в фотографиях",
      more: "Показать ещё",
      less: "Свернуть",
      empty: "Фотографии скоро появятся",
      open: "Увеличить фото",
      close: "Закрыть",
      prev: "Предыдущее фото",
      next: "Следующее фото",
      photo: "Фотография детского сада",
    },
    documents: {
      eyebrow: "Документы",
      title: "Документы детского сада",
      text: "С официальными документами детского сада можно ознакомиться по ссылке ниже.",
      button: "Посмотреть документы",
      soon: "Ссылка на документы скоро появится",
    },
    contacts: {
      eyebrow: "Контакты",
      title: "Свяжитесь с нами",
      subtitle: "Если у вас есть вопросы — позвоните нам или напишите в Instagram",
      address: "Адрес",
      phones: "Телефоны",
      instagram: "Instagram",
      hours: "Режим работы",
      call: "Позвонить",
      instagramBtn: "Instagram",
      map: "Открыть на карте",
      mapTitle: "Детский сад «Бөбек» на карте",
    },
    footer: {
      description:
        "Уютная и доброжелательная среда для развития и воспитания вашего ребёнка.",
      sections: "Разделы",
      contacts: "Контакты",
      rights: "Все права защищены.",
    },
  },
};

export type { Dictionary };
