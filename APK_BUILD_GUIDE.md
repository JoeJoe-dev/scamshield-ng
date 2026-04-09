# ScamShield NG - APK Build Guide

## Prerequisites

1. **Java Development Kit (JDK)**: Download and install JDK 17+ from [oracle.com](https://www.oracle.com/java/technologies/downloads/)
2. **Android Studio**: Download from [developer.android.com](https://developer.android.com/studio)
3. **Android SDK**: Installed via Android Studio (API level 33+)
4. **Gradle**: Installed with Android Studio

## Environment Setup (Windows)

1. Set JAVA_HOME:
   ```powershell
   [Environment]::SetEnvironmentVariable("JAVA_HOME", "C:\Program Files\Java\jdk-17", "User")
   ```

2. Set ANDROID_HOME:
   ```powershell
   [Environment]::SetEnvironmentVariable("ANDROID_HOME", "C:\Users\YourUsername\AppData\Local\Android\Sdk", "User")
   ```

3. Add to PATH:
   ```powershell
   [Environment]::SetEnvironmentVariable("PATH", "$env:PATH;$env:ANDROID_HOME\cmdline-tools\latest\bin", "User")
   ```

## Build Steps

### 1. Clean Build
```bash
npm run build
```

### 2. Update Android Assets
```bash
npx cap sync android
```

### 3. Open Android Studio
```bash
npx cap open android
```

### 4. Build APK (in Android Studio)

**Debug APK** (for testing):
- Click: Build → Build Bundles/APK → Build APK(s)
- Output: `android/app/build/outputs/apk/debug/app-debug.apk`

**Release APK** (for distribution):
1. Generate signing key (one-time):
   ```bash
   keytool -genkey -v -keystore scamshield.keystore -keyalg RSA -keysize 2048 -validity 10000 -alias scamshield_key
   ```

2. Go to: Build → Generate Signed Bundle/APK
3. Select "APK"
4. Choose keystore file (`scamshield.keystore`)
5. Enter keystore password and key alias password
6. Select "Release" build variant
7. Finish

Output: `android/app/release/app-release.apk`

### 5. Install on Device

**Via ADB** (Android Debug Bridge):
```bash
adb install android/app/build/outputs/apk/debug/app-debug.apk
```

**Via Android Studio**:
- Click: Run → Run 'app' on connected device

## Troubleshooting

### Gradle Sync Issues
```bash
cd android
./gradlew clean
./gradlew build
```

### Port Already in Use
Change port in `capacitor.config.ts` or kill process:
```bash
lsof -ti:3000 | xargs kill -9  # macOS/Linux
netstat -ano | findstr :3000   # Windows
```

### Missing SDK Components
Open Android Studio → SDK Manager → Install required API levels

## Next Steps After Build

1. **Test on Device**: Connect Android device and run the APK
2. **Add Camera Integration**: See [Capacitor Camera Docs](https://capacitorjs.com/docs/apis/camera)
3. **Offline Support**: Service worker already enabled (check `/public/service-worker.js`)
4. **Native Features**: Check available plugins at [Capacitor Plugins](https://capacitorjs.com/docs/plugins)
5. **Distribution**: Upload release APK to Google Play Store or distribute directly

## Supporting Files

- **Service Worker**: `/public/service-worker.js` - Enables offline mode
- **Manifest**: `/public/manifest.json` - App metadata
- **Capacitor Config**: `/capacitor.config.ts` - Platform configuration

## Features Enabled

✅ Offline Support (Service Worker + Caching)
✅ Native Camera Access (via @capacitor/camera)
✅ Device Information (via @capacitor/device)
✅ Network Status Detection (via @capacitor/network)
✅ App Lifecycle Management (via @capacitor/app)
✅ Share Functionality
✅ Local Storage (localStorage API ready)
✅ Dark Mode Support
✅ Mobile-Optimized UI (Tailwind CSS)
