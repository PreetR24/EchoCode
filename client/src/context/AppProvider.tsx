import { ReactNode } from "react"
import { AppContextProvider } from "./AppContext"
import { ChatContextProvider } from "./ChatContext"
import { FileContextProvider } from "./FileContext"
import { RunCodeContextProvider } from "./RunCodeContext"
import { SettingContextProvider } from "./SettingContext"
import { SocketProvider } from "./SocketContext"
import { ViewContextProvider } from "./ViewContext"
import { CopilotContextProvider } from "./CopilotContext"

function AppProvider({ children }: { children: ReactNode }) {
    return (
        <AppContextProvider>
            <SocketProvider>
                <SettingContextProvider>
                    <ViewContextProvider>
                        <FileContextProvider>
                            <CopilotContextProvider>
                                <RunCodeContextProvider>
                                    <ChatContextProvider>
                                        {children}
                                    </ChatContextProvider>
                                </RunCodeContextProvider>
                            </CopilotContextProvider>
                        </FileContextProvider>
                    </ViewContextProvider>
                </SettingContextProvider>
            </SocketProvider>
        </AppContextProvider>
    )
}

export default AppProvider
