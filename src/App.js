import { RecoilRoot, useRecoilValue } from "recoil";
import { messageAtom, networkAtom, notificationAtom, sumOfNotificationSelector } from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const notificationCount = useRecoilValue(notificationAtom);
  const networkCount = useRecoilValue(networkAtom);
  const messageCount = useRecoilValue(messageAtom);
  const totalNotificationCount = useRecoilValue(sumOfNotificationSelector);

  return (
    <>
      <button>Notification ({notificationCount >= 100 ? "99+" : notificationCount})</button>
      <button>Network ({networkCount})</button>
      <button>Message ({messageCount})</button>
      <button>Me ({totalNotificationCount})</button>
    </>
  );
}

export default App;
