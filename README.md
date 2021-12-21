### 프로젝트 생성

```tsx
// adding typescript
npx create-react-app 'app name' --template typescript
```

### 스타일 관련 패키지

- @mui/material, @mui/icons-material
    - design system - material ui
    [Usage - MUI](https://mui.com/getting-started/usage/)
        
- @emotion/react, @emotion/styled
    - css in js
    [Usage - Emotion](https://emotion.sh/docs/introduction)

### 파일 구조

- public: favicon, html...
- .env.*: 환경 변수
- src
    - components: 재사용 컴포넌트
        - ex) Header, Layout...
    - hooks: 재사용 로직
    - resources: config(env 연동), theme(mui theme)...
    - templates: view를 위한 template
        - ex) Project, Device...
    - store: Redux/MobX/Recoil 등 상태 관리 관련 파일
- package.json

### 프로젝트 구조

1. index.tsx
    - Style init 설정 및 Provider 설정
    
    ```tsx
    // example index
    ReactDom.render(
    	<React.StrictMode>
    		<CSSBaseline /> // css 초기화 by mui
    		<ThemeProvider theme={theme}> // mui theme provider
    			<App /> // 2.
    		</ThemeProvider>
    	</React.StrictMode>,
    	document.getElementById("root")
    );
    ```
    
2. App.tsx
    - App init 설정 및 Routes 설정
    
    ```tsx
    // example App
    function App() {
    	// Init Logic
    	...	
    	
    	// routes
    	return (
    		<BrowserRouter>
    			<Routes>
    				<Route path="/" element={<Home />} /> // 3.
    				<Route path="/about" element={<About />} />
    			<Routes>
    		</BrowserRouter>
    	)
    }
    ```
    
3. templates/Home
    
    ```tsx
    // example
    const Home = () => {
    	// 로직 - hooks
    	...
    
    	// component
    	return (
    		<Layout>
    			...
    		</Layout>
    	)
    }
    ```
    
  ### 읽으면 좋은 자료
  - [벨로퍼트와 함께하는 모던 리액트](https://react.vlpt.us/)
  - [리덕스 잘 쓰고 계시나요? - 리디주식](https://ridicorp.com/story/how-to-use-redux-in-ridi/)
