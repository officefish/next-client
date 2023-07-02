import { FC, useState,  useEffect } from "react"
import TableItem from "./table/table-item"
import WithTabs from "./tabs"

import TableHead from "./table/table-head"
import Image from "next/image"

import avatarSrc from '@public/avatar.jpg'

type Props = {}
const Chat: FC = (props: Props) => {

  return (<>
        <h1>Chat bubble</h1>
        <p>Chat bubbles are used to show one line of conversation and all its data, including the author image, author name, time, etc.</p>

        <div className="not-prose mt-6 mb-10 overflow-x-auto">
          <table className="table-compact table w-full">
            
            <TableHead />
            
            <tbody className="text-base-content dark:text-base-content-dark">
              
              <TableItem name='chat' type='component' description="Container for one line of conversation and all its data" />
              <TableItem name='chat-start' type='modifier' description="Aligns `chat` to left (required)" />
              <TableItem name='chat-end' type='modifier' description="Aligns `chat` to end (required)" />

              <TableItem name='chat-image' type='component' description="For the author image" />
              <TableItem name='chat-header' type='component' description="For the line above the chat bubble" />
              <TableItem name='chat-footer' type='component' description="For the line below the chat bubble" />
              <TableItem name='chat-bubble' type='component' description="For the content of chat" />

              <TableItem name='chat-bubble-primary' type='modifier' description="sets `primary` color for the `chat-bubble`" />
              <TableItem name='chat-bubble-secondary' type='modifier' description="sets `secondary` color for the `chat-bubble`" />
              <TableItem name='chat-bubble-accent' type='modifier' description="sets `accent` color for the `chat-bubble`" />

              <TableItem name='chat-bubble-info' type='modifier' description="sets `info` color for the `chat-bubble`" />
              <TableItem name='chat-bubble-success' type='modifier' description="sets `success` color for the `chat-bubble`" />
              <TableItem name='chat-bubble-warning' type='modifier' description="sets `warning` color for the `chat-bubble`" />
              <TableItem name='chat-bubble-error' type='modifier' description="sets `error` color for the `chat-bubble`" />
              
            </tbody>
          </table>
        </div>

        <ChatStartChatEndTabs />
        <ChatWithImageTabs />
        <ChatWithHeaderAndFooterTabs />
        <ChatWithHeaderFooterTabs />
        <ChatWithColorsTabs />
       
    </>
        
    
  )
}

export default Chat

const ChatStartChatEndTabs:FC = () => <WithTabs title="chat-start and chat-end">
    <div className="w-full">
        <div className="chat chat-start">
            <div className="chat-bubble">It's over Anakin, <br/>I have the high ground.</div>
        </div>
        <div className="chat chat-end">
            <div className="chat-bubble">You underestimate my power!</div>
        </div>
    </div>
</WithTabs>

const ChatWithImageTabs:FC = () => <WithTabs title="Chat with image">
    <div className="w-full">
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
            <Image alt="shoes" 
                  src={avatarSrc} 
                  width={40} 
                  height={40} 
                  />
            </div>
          </div>
          <div className="chat-bubble">It was said that you would, destroy the Sith, not join them.</div>
        </div>
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
            <Image alt="shoes" 
                  src={avatarSrc} 
                  width={40} 
                  height={40} 
                  />
            </div>
          </div>
          <div className="chat-bubble">It was you who would bring balance to the Force</div>
        </div>
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <Image alt="shoes" 
                  src={avatarSrc} 
                  width={40} 
                  height={40} 
                  />
            </div>
          </div>
          <div className="chat-bubble">Not leave it in Darkness</div>
        </div>
    </div>
</WithTabs>

const ChatWithHeaderAndFooterTabs:FC = () => <WithTabs title="Chat with image, header and footer">
    <div className="w-full">
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
          <Image alt="shoes" 
                  src={avatarSrc} 
                  width={40} 
                  height={40} 
                  />
          </div>
        </div>
        <div className="chat-header">
          Obi-Wan Kenobi
          <time className="pl-2 text-xs opacity-50">2 hours ago</time>
        </div>
        <div className="chat-bubble">You were the Chosen One!</div>
        <div className="chat-footer opacity-50">
          Seen
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
          <Image alt="shoes" 
                  src={avatarSrc} 
                  width={40} 
                  height={40} 
                  />
          </div>
        </div>
        <div className="chat-header">
          Obi-Wan Kenobi
          <time className="pl-2 text-xs opacity-50">2 hour ago</time>
        </div>
        <div className="chat-bubble">I loved you.</div>
        <div className="chat-footer opacity-50">
          Delivered
        </div>
      </div>
    </div>
</WithTabs>


const ChatWithHeaderFooterTabs:FC = () => <WithTabs title="Chat with header and footer">
    <div className="w-full">
          <div className="chat chat-start">
        <div className="chat-header">
          Obi-Wan Kenobi
          <time className="pl-2 text-xs opacity-50">2 hours ago</time>
        </div>
        <div className="chat-bubble">You were the Chosen One!</div>
        <div className="chat-footer opacity-50">
          Seen
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-header">
          Obi-Wan Kenobi
          <time className="pl-2 text-xs opacity-50">2 hour ago</time>
        </div>
        <div className="chat-bubble">I loved you.</div>
        <div className="chat-footer opacity-50">
          Delivered
        </div>
      </div>
    </div>
</WithTabs>

const ChatWithColorsTabs:FC = () => <WithTabs title="Chat with header and footer">
    <div className="w-full">
          <div className="chat chat-start">
        <div className="chat-bubble chat-bubble-primary">What kind of nonsense is this</div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble chat-bubble-secondary">Put me on the Council and not make me a Master!??</div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble chat-bubble-accent">That's never been done in the history of the Jedi. It's insulting!</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble chat-bubble-info">Calm down, Anakin.</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble chat-bubble-success">You have been given a great honor.</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble chat-bubble-warning">To be on the Council at your age.</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble chat-bubble-error">It's never happened before.</div>
      </div>
    </div>
</WithTabs>

