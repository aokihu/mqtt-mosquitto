/**
 * @author aokihu <aokihu@gmail.com>
 */


interface IMqttWarpperClass {

    cmd: {subscrible: string, publish: string}

    /* Constructor method */
    construct(this: ThisType<IMqttWarpperClass>, arg: IMqttWarpperClassConstructOptions): unknown

    connect(url: string): void
    connect(options: IMqttWarpperClassOptions): void
    close(): void
    publish(topic: string, payload?: unknown, options?: MqttWapperPulishOptions): viud
    subscribe(topic: string): void
    unsubscrible(topic: string): void
}

type Qos = 0 | 1 | 2

interface IMqttWarpperClassConstructOptions {
    sub_bin: string,
    pub_bin: string,
}

interface IMqttWarpperClassOptions {
    url?: string,
    host?: string,
    port?: string,
    username?: string,
    password?: string,
    qos?: Qos,
}

interface MqttWapperPulishOptions {
    qos?: Qos,
    retain?: boolean
}