import { createRoot } from 'react-dom/client'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import { AppProvider } from './context'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store'

const root = createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <AppProvider>
      <App />
    </AppProvider>
  </Provider>
)

serviceWorkerRegistration.register()
