import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface NotificationProps {
  id: string;
  title: string;
  message: string;
  type: "success" | "error" | "info" | "warning";
  duration?: number;
}

interface NotificationPaneProps {
  notifications: NotificationProps[];
  onRemove: (id: string) => void;
}

const NotificationPane = ({
  notifications,
  onRemove,
}: NotificationPaneProps) => {
  return (
    <div className="fixed top-4 right-4 z-50 space-y-3 max-w-sm w-full">
      <AnimatePresence>
        {notifications.map((notification) => (
          <Notification
            key={notification.id}
            notification={notification}
            onRemove={onRemove}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

interface NotificationItemProps {
  notification: NotificationProps;
  onRemove: (id: string) => void;
}

const Notification = ({ notification, onRemove }: NotificationItemProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onRemove(notification.id), 300);
    }, notification.duration || 5000);

    return () => clearTimeout(timer);
  }, [notification.id, notification.duration, onRemove]);

  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return "✓";
      case "error":
        return "✕";
      case "warning":
        return "⚠";
      case "info":
        return "ℹ";
      default:
        return "ℹ";
    }
  };

  const getColors = (type: string) => {
    switch (type) {
      case "success":
        return {
          bg: "bg-green/10 border-green/20",
          text: "text-green",
          icon: "text-green",
        };
      case "error":
        return {
          bg: "bg-red/10 border-red/20",
          text: "text-red",
          icon: "text-red",
        };
      case "warning":
        return {
          bg: "bg-yellow/10 border-yellow/20",
          text: "text-yellow",
          icon: "text-yellow",
        };
      case "info":
        return {
          bg: "bg-blue/10 border-blue/20",
          text: "text-blue",
          icon: "text-blue",
        };
      default:
        return {
          bg: "bg-subtext1/10 border-subtext1/20",
          text: "text-subtext1",
          icon: "text-subtext1",
        };
    }
  };

  const colors = getColors(notification.type);

  return (
    <motion.div
      initial={{ opacity: 0, x: 300, scale: 0.3 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        x: isVisible ? 0 : 300,
        scale: isVisible ? 1 : 0.3,
      }}
      exit={{ opacity: 0, x: 300, scale: 0.3 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
      }}
      className={`
        ${colors.bg} 
        backdrop-blur-md 
        border 
        rounded-2xl 
        p-4 
        shadow-lg 
        shadow-black/5
        relative
        overflow-hidden
        cursor-pointer
        hover:scale-105
        transition-transform
        duration-200
      `}
      onClick={() => {
        setIsVisible(false);
        setTimeout(() => onRemove(notification.id), 300);
      }}
    >
      {/* Progress bar */}
      <motion.div
        initial={{ width: "100%" }}
        animate={{ width: "0%" }}
        transition={{
          duration: (notification.duration || 5000) / 1000,
          ease: "linear",
        }}
        className={`absolute bottom-0 left-0 h-1 ${colors.icon.replace(
          "text-",
          "bg-"
        )} opacity-50`}
      />

      <div className="flex items-start gap-3">
        {/* Icon */}
        <div className={`${colors.icon} text-lg font-bold mt-0.5`}>
          {getIcon(notification.type)}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h4
            className={`${colors.text} font-medium text-sm mb-1 font-display`}
          >
            {notification.title}
          </h4>
          <p className="text-subtext1 text-xs leading-relaxed">
            {notification.message}
          </p>
        </div>

        {/* Close button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsVisible(false);
            setTimeout(() => onRemove(notification.id), 300);
          }}
          className="text-subtext1 hover:text-text transition-colors text-xs opacity-60 hover:opacity-100"
        >
          ✕
        </button>
      </div>
    </motion.div>
  );
};

// Hook for managing notifications
export const useNotifications = () => {
  const [notifications, setNotifications] = useState<NotificationProps[]>([]);

  const addNotification = (
    title: string,
    message: string,
    type: "success" | "error" | "info" | "warning" = "info",
    duration?: number
  ) => {
    const id = Math.random().toString(36).substr(2, 9);
    const notification: NotificationProps = {
      id,
      title,
      message,
      type,
      duration,
    };

    setNotifications((prev) => [...prev, notification]);
  };

  const removeNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return {
    notifications,
    addNotification,
    removeNotification,
  };
};

export default NotificationPane;
