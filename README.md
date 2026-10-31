# violet-bridge
Selected project work.

## Design system sample

Open [`design-system.html`](./design-system.html) in a browser to review the starter tokens, core components, and responsive iPhone/iPad reference layouts.

The interactive React/Vite reference is the main entry point: run `npm install`, then `npm run dev`. It uses `lucide-react` for the icon system and lives in `src/`.

## Mobile app

The driver app uses Capacitor to run the React interface in a native mobile shell. After changes, run `npm run build` and `npx cap sync android`, then open the Android project with `npx cap open android` in Android Studio. The application ID is `com.violetbridge.driver` and should be changed before publishing.

iOS setup requires full Xcode and CocoaPods. Once installed, run `npx cap add ios`, then `npx cap sync ios` and `npx cap open ios`. Native device builds and signing must be completed in the platform IDEs.
