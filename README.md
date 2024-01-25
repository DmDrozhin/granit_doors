# Магазин з прожаду вхідних дверей
Даний додаток є клієнтською частиною магазину з продажу вхідних металевих дверей. 
Виконана PerfectFixel верстка з макетів Figma шириною 1440px та 320px.
- За сценарієм, додаток отримує з бекенду дані – масив об’єктів з даними про товари, вказівник використаних абревіатур, дані продавця (в т.ч. посилання на соц. мережі та інше). 
- Кожний товар – об’єкт масиву має вкладений масив – артиклі товару, які безпосередньо містять специфічні характеристики кожного артиклю які відрізняються від загальних базових. 
- Перед використанням, дані товарів трансформуються в зручний для використання формат та зберігаються в namespaced Vuex модулі. Компонентам надаються мінімальні можливості для трансформації даних. Перед відображенням, дані проходять стартове сортування та фільтрацію по замовченню.
- Базовий інтерфейс надає користувачу можливість робити сортування товарів за 4-ма показниками, фільтрувати товари, контролювати відображення за артиклями.
- Окрім базового інтерфейсу, додаток використовує три модульних вікна: 1) слайдер зображень товару. Для взаємодії  з користувачем: 2) запит – «надати каталог», 3) запит – «замовити товар».
- Після перевірки на відповідність, дані з запитів «надати каталог» та «замовити товар» зберігаються в Vuex модулі для подальшого надсилання до бекенду.
- Додаток є презентаційним та на включає логічні для даного процесу підтвердження відправки запитів.
- На даний час, додаток не включає адаптивні версії окрім 320 та 1440.

# Shop for the sale of entrance doors
This application is the client side of a store selling metal entrance doors. 
The PerfectFixel layout is made from Figma layouts with a width of 1440px and 320px.
- According to the scenario, the application receives data from the backend - an array of objects with product data, an index of used abbreviations, seller data (including links to social networks, etc.). 
- Each product - an array object has a nested array - product items that directly contain the specific characteristics of each item that differ from the general basic ones. 
- Before use, the product data is transformed into a usable format and stored in a namespaced Vuex module. Components are provided with minimal opportunities for data transformation. Before displaying, the data undergoes initial sorting and default filtering.
- The basic interface provides the user with the ability to sort products by 4 indicators, filter products, and control the display by article.
- In addition to the basic interface, the application uses three modular windows: 1) product image slider. For user interaction: 2) request - "provide a catalog", 3) request - "order a product".
- After checking for compliance, the data from the "provide a catalog" and "order a product" requests is stored in the Vuex module for further sending to the backend.
- The application is a presentation application and does not include logical confirmations of sending requests for this process.
- Currently, the application does not include adaptive versions other than 320 and 1440.

  # Applied tools:
  - SDK: Visaul Code
  - Framework: Vue 3 CLI (component API)
  - Libraries: Vuex, Vue router
  - Add ons: Swiper Element (WebComponent)
