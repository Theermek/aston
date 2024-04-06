[![Deploy Aston project to GitHub Pages](https://github.com/Theermek/aston/actions/workflows/aston.yaml/badge.svg?branch=main)](https://github.com/Theermek/aston/actions/workflows/aston.yaml)

# Rick and Morty

- API: [Rick and Morty API](https://rickandmortyapi.com/)

---

## Основной функционал

- Регистрация и авторизация пользователей
- Загрузка списка персонажей
- Страница с историей поиска
- Страница с любимыми персонажами

---

## Реализация требований

### 1 уровень (обязательный - необходимый минимум)

- [x] Реализованы Требования к функциональности

#### React

- [x] Пишем [функциональные компоненты c хуками](https://github.com/Theermek/aston/tree/main/src/components)
- [x] Есть разделение на [умные](https://github.com/Theermek/aston/blob/main/src/pages/FavoritesPage.tsx) и [глупые](https://github.com/Theermek/aston/blob/main/src/components/Suggests.tsx) компоненты
- [x] Есть рендеринг [списков](https://github.com/Theermek/aston/blob/main/src/components/CharacterList.tsx)
- [x] Реализована хотя бы одна [форма](https://github.com/Theermek/aston/blob/main/src/components/Form.tsx)
- [x] Есть применение [Контекст API](https://github.com/Theermek/aston/blob/main/src/context/theme.tsx)
- [x] Есть применение [предохранителя](https://github.com/Theermek/aston/blob/main/src/components/ErrorBoundaries.tsx)
- [x] Есть хотя бы один кастомный хук: [useDebounce](https://github.com/Theermek/aston/blob/main/src/hooks/debounce.ts),
- [x] Хотя бы несколько компонентов используют PropTypes: [CharacterList](https://github.com/Theermek/aston/blob/main/src/components/CharacterList.tsx), [CharacterCard](https://github.com/Theermek/aston/blob/main/src/components/CharacterCard.tsx), [CharacterDetailsPage](https://github.com/Theermek/aston/blob/main/src/pages/CharacterDetailsPage.tsx)
- [x] Поиск не должен триггерить много запросов к серверу: [Debounce](https://github.com/Theermek/aston/blob/main/src/hooks/debounce.ts)
- [x] Есть применение [Lazy](https://github.com/Theermek/aston/blob/main/src/App.tsx)[+ Suspense](https://github.com/Theermek/aston/blob/main/src/components/Layout.tsx)

#### Redux

- [x] Используется[Modern Redux with Redux Toolkit](src/store/store.ts)
- [x] Используется [слайсы](src/store/slices/)
- [x] Есть хотя бы одна кастомная [мидлвара](src/store/middlewares/userMiddleware.ts)
- [x] Используется [RTK Query](src/store/rickApi.ts)
- [x] Используется [Transforming Responses](src/store/rickApi.ts)

---

### 2 уровень (необязательный)

- [x] Используется TypeScript
- [x] Используется[Firebase](src/utils/firebase.ts)
- [x] Настроен CI/CD
