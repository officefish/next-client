import { FC, useState,  useEffect } from "react"
import TableItem from "./table/table-item"
import WithTabs from "./tabs"

import TableHead from "./table/table-head"
import Image from "next/image"

import maskBgSrc from '@public/mask-bg.jpg'

type Props = {}
const Link: FC = (props: Props) => {

  return (<>
        <h1>Link</h1>
        <p>Link adds the missing underline style to links.</p>

        <div className="not-prose mt-6 mb-10 overflow-x-auto">
          <table className="table-compact table w-full">
            <TableHead />
            <tbody className="text-base-content dark:text-base-content-dark">         
             
              <TableItem name='link' type='component' description="Adds underline to a text" />
             
              <TableItem name='link-neutral' type='modifier' description="Link with `neutral` color" />
              <TableItem name='link-primary' type='modifier' description="Link with `primary` color" />
              <TableItem name='link-secondary' type='modifier' description="Link with `secondary` color" />
              <TableItem name='link-accent' type='modifier' description="Link with `accent` color" />
              
              <TableItem name='link-info' type='modifier' description="Link with `info` color" />
              <TableItem name='link-success' type='modifier' description="Link with `success` color" />
              <TableItem name='link-warning' type='modifier' description="Link with `warning` color" />
              <TableItem name='link-error' type='modifier' description="Link with `error` color" />
              <TableItem name='link-hover' type='modifier' description="Only show underline on hover" />

            </tbody>
          </table>
        </div>

        <LinkTabs /> 
        <TailwindLinkTabs />
        <PrimaryLinkTabs />
        <SecondaryLinkTabs />
        <AccentLinkTabs />
        <NeutralLinkTabs />
        <InfoLinkTabs />
        <SuccessLinkTabs />
        <WarningLinkTabs />
        <ErrorLinkTabs />
        <HoverLinkTabs />
    </>
  )
}

export default Link

const LinkTabs:FC = () => <WithTabs title="Link">
    <a className="link text-base-content dark:text-base-content-dark">I'm a simple link</a>
</WithTabs>

const TailwindLinkTabs:FC = () => <WithTabs title="Link">
    <p className="text-base-content dark:text-base-content-dark">Tailwind CSS resets the style of links by default.
      <br/>
      Add "link" class to make it look like a 
      <a className="link">normal link</a> again.
    </p>
</WithTabs>

const PrimaryLinkTabs:FC = () => <WithTabs title="Primary color">
    <a className="link link-primary">I'm a simple link</a>
</WithTabs>

const SecondaryLinkTabs:FC = () => <WithTabs title="Secondary color">
    <a className="link link-secondary">I'm a simple link</a>
</WithTabs>

const AccentLinkTabs:FC = () => <WithTabs title="Accent color">
    <a className="link link-accent">I'm a simple link</a>
</WithTabs>

const NeutralLinkTabs:FC = () => <WithTabs title="Neutral color">
    <a className="link link-neutral">I'm a simple link</a>
</WithTabs>


const InfoLinkTabs:FC = () => <WithTabs title="Info color">
    <a className="link link-info">I'm a simple link</a>
</WithTabs>

const SuccessLinkTabs:FC = () => <WithTabs title="Success color">
    <a className="link link-success">I'm a simple link</a>
</WithTabs>

const WarningLinkTabs:FC = () => <WithTabs title="Warning color">
    <a className="link link-warning">I'm a simple link</a>
</WithTabs>

const ErrorLinkTabs:FC = () => <WithTabs title="Error color">
    <a className="link link-error">I'm a simple link</a>
</WithTabs>

const HoverLinkTabs:FC = () => <WithTabs title="Show underline only on hover">
    <a className="link link-hover text-base-content dark:text-base-content-dark">I'm a simple link</a>
</WithTabs>
