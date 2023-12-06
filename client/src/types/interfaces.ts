export interface AccountProps {
    currentUser: any;
    contacts: any[];
    onLoginSuccess: (userData: any) => void;
    onLogout: () => void;
    setCurrentChat: (contact: Contact) => void; // Add this line
}


export interface User {
    _id: string;
    username: string;
    email: string;
    avatarImage: string;
}

export interface Contact {
    _id: string;
    username: string;
    avatarImage: string;
}

export interface ContactProps {
    handleLogout: () => void;
    contacts: Contact[];
    setCurrentChat: (contact: Contact) => void;
}

export interface Message {
    _id?: string;
    fromSelf: boolean;
    message: string;
}

export interface IncomingMessage {
    from: string;
    msg: string;
}

export interface ChatContainerProps {
    currentChat: {
        _id: string;
        username: string;
        avatarImage: string;
    };
    socket: any;
    userId: string;
}

export interface ChatInputProps {
    handleSendMsg: (msg: string) => void;
}

export interface PanelProps {
    currentChat: Contact | null;
    socket: any;
    currentUser: User | null;
}

export interface RegisterProps {
    toggleIsRegistering: () => void;
}

export interface LoginProps {
    toggleIsRegistering: () => void;
    onLoginSuccess: (userData: any) => void;
}