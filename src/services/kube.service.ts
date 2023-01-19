import * as k8s from '@kubernetes/client-node';

const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

export const kubeService = {
  getPods: (namespace: string) => {
    return k8sApi.listNamespacedPod(namespace).then((res: any) => {
      return res.body;
    });
  },
};
