import toast from "react-hot-toast";

type PropType = {
    message: string
}

export const successNotify = ({message}: PropType) =>
  toast(message, { position: "top-right", icon: "✅" });

export const errorNotify = ({message}: PropType) =>
  toast(message, { position: "top-right", icon: "❌" });