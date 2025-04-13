import { FOOTER_CONTENT } from "../constants"

const Footer = () => {
  return (
    <footer className="mt-20 text-neutral-400">
        <div className="max-w-7xl mx-auto px-4 ">   


            <div className="my-12 border-t border-neutral-800 pt-8 text-center text-sm text-neutral-500">
                <div className="flex justify-between">
                    <div className="text-xs">   
                        <p>{FOOTER_CONTENT.platformsText}</p>
                    </div>
                    <div className="text-xs">   
                        <p>{FOOTER_CONTENT.copyrightText}</p>
                    </div>
                </div>
            </div>
        </div>


    </footer>

  )
}

export default Footer