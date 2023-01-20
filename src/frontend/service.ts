declare global { interface Window { service: any; } }

export default {
    async getPods(namespace: string) {
        return window.service.getPods(namespace);
    },
    write(data: string) {
        return window.service.write(data);
    },
    onPodData(callback: any) {
        return window.service.onPodData(callback);
    }
}