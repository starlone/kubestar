const k8s = require("@kubernetes/client-node");

const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

module.exports = {
  getPods: (namespace) => {
    return k8sApi.listNamespacedPod(namespace).then((res) => {
        console.log(res.body);
        return res.body;
    });
  },
};
