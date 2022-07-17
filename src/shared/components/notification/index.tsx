import { notification } from 'antd';
import type { NotificationPlacement } from 'antd/es/notification';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

export const ShowNotification = (type: NotificationType, message: string, title?: string, placement: NotificationPlacement = "topRight") => (
    notification[type]({
        message: title,
        description: message,
        placement,
    })
);