import { FC, useState,  useEffect } from "react"
import TableItem from "./table/table-item"
import WithTabs from "./tabs"

import TableHead from "./table/table-head"

type Props = {}
const Modal: FC = (props: Props) => {

  return (<>
        <h1>Modal</h1>
        <p>Modal is used to show a dialog or a box when you click a button.</p>

        <div className="not-prose mt-6 mb-10 overflow-x-auto">
          <table className="table-compact table w-full">
            <TableHead />
            <tbody className="text-base-content dark:text-base-content-dark">         
              <TableItem name='modal' type='component' description="Container element" />
              <TableItem name='modal-box' type='component' description="The content of modal" />
              <TableItem name='modal-action' type='component' description="Container for modal buttons" />
              <TableItem name='modal-toggle' type='component' description="For checkbox that controls modal" />
              <TableItem name='modal-open' type='modifier' description="Add/remove this class to open/close the modal using JS" />
              <TableItem name='swap-bottom' type='responsive' description="Moves the modal to bottom" />
              <TableItem name='swap-middle' type='responsive' description="Moves the modal to middle (default)" />
            </tbody>
          </table>
        </div>

        <ModalUsingLabelTabs />
        <ModalHiddenCheckboxTabs />
        <ModalClosesClickedOutsideTabs />
        <WithCustomWidthModalTabs />
        <ResponsiveModalTabs />
    </>
  )
}

export default Modal

const ModalUsingLabelTabs:FC = () => <WithTabs title="Modal using label + hidden checkbox">
    {/* The button to open modal */}
    <label htmlFor="my-modal" className="btn">open modal</label>

    {/* Put this part before </body> tag */}
    <input type="checkbox" id="my-modal" className="modal-toggle" />
    <div className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
            <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
            <div className="modal-action">
            <label htmlFor="my-modal" className="btn">Yay!</label>
            </div>
        </div>
    </div>
</WithTabs>

const ModalHiddenCheckboxTabs:FC = () => <WithTabs title="Modal using label + hidden checkbox with a close button at corner">
    {/* The button to open modal */}
    <label htmlFor="my-modal-3" className="btn">open modal</label>

    {/* Put this part before </body> tag */}
    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
        <div className="modal-box relative">
            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
            <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
        </div>
    </div>
</WithTabs>

const ModalClosesClickedOutsideTabs:FC = () => <WithTabs title="Modal that closes when clicked outside">
    {/* The button to open modal */}
    <label htmlFor="my-modal-4" className="btn">open modal</label>

    {/* Put this part before </body> tag */}
    <input type="checkbox" id="my-modal-4" className="modal-toggle" />
    <label htmlFor="my-modal-4" className="modal cursor-pointer">
    <label className="modal-box relative" htmlFor="">
        <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
        <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    </label>
    </label>
</WithTabs>

const WithCustomWidthModalTabs:FC = () => <WithTabs title="Modal with custom width">
    {/* The button to open modal */}
    <label htmlFor="my-modal-5" className="btn">open modal</label>

    {/* Put this part before </body> tag */}
    <input type="checkbox" id="my-modal-5" className="modal-toggle" />
    <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
            <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
            <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">Yay!</label>
            </div>
        </div>
    </div>
</WithTabs>

const ResponsiveModalTabs:FC = () => <WithTabs title="Responsive: Modal goes bottom on mobile screen and goes middle on desktop">
   {/* The button to open modal */}
    <label htmlFor="my-modal-6" className="btn">open modal</label>

    {/* Put this part before </body> tag */}
    <input type="checkbox" id="my-modal-6" className="modal-toggle" />
    <div className="modal modal-bottom sm:modal-middle">
    <div className="modal-box">
        <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
        <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
        <div className="modal-action">
        <label htmlFor="my-modal-6" className="btn">Yay!</label>
        </div>
    </div>
    </div>
</WithTabs>