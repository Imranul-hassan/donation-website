
const FAQ = () => {
    return (
        <div id="faq" className=" p-5 my-10">
            <div className="md:w-7/12 mx-auto mb-7">
                <h1 className="font-bold text-3xl text-center">Helping Others Stay Warm: Your Questions Answered</h1>
                <p className="mt-4">Find answers to the most common questions about donating and our campaigns.</p>
            </div>
           <div className="md:w-8/12 mx-auto ">
                <div className="collapse collapse-arrow bg-base-100">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">What can I donate?</div>
                    <div className="collapse-content">
                        <p>You can donate winter clothing items such as jackets, sweaters, blankets, gloves, scarves, and hats, as well as monetary contributions to support our campaigns.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-100  my-5">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">How do I donate?</div>
                    <div className="collapse-content">
                        <p>You can donate through our platform by filling out the online form for clothing donations </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-100">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Where are the donations distributed?</div>
                    <div className="collapse-content">
                        <p>Donations are distributed to vulnerable populations across Bangladesh, focusing on areas with the most urgent needs during the winter season.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-100  my-5">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">How do I become a volunteer?</div>
                    <div className="collapse-content">
                        <p>To volunteer, sign up through the Volunteers section on our website, and our team will contact you with the next steps.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 mb-10">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">How do I know my donation is making an impact?</div>
                    <div className="collapse-content">
                        <p>We share updates through our Impact section, including stories, photos, and reports on how your contributions are helping those in need.</p>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default FAQ;