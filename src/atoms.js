import { atom, selector } from "recoil";

export const notificationAtom = atom({
    key: "notificationAtom",
    default: 100
});

export const networkAtom = atom({
    key: "networkAtom",
    default: 0
});

export const messageAtom = atom({
    key: "messageAtom",
    default: 0
});

export const meeAtom = atom({
    key: "meeAtom",
    default: 0
});

export const sumOfNotificationSelector = selector({
    key: "sumOfNotificationSelector",
    get: ({ get }) => {
        const notificationCount = get(notificationAtom);
        const networkCount = get(networkAtom);
        const messageCount = get(messageAtom);
        const myCount = get(meeAtom);
        return networkCount + notificationCount + messageCount + myCount;
    }
});
