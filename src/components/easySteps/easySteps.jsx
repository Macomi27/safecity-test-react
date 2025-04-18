import './easySteps.css'




function EasySteps(){
return(
    <div className="easy-steps">
        <p className='steps'>EASY STEPS</p>
        <h2 className='detail'>Details about process</h2>
        <div className="processes">
            <div className="process1">
                <p className='number'>01.</p>
                <h2>Comprehensive financial assessment</h2>
                <p className='process-detail'>Understanding the client's current financial standing,
                     goals, and challenges lays the foundation for tailored accounting solutions.
                </p>
            </div>
            <div className="process2">
                <p className='number'>02.</p>
                <h2>Customized financial planning</h2>
                <p className='process-detail'>A well-crafted plan should not only address
                     immediate concerns but also provide a roadmap for long-term success.
                </p>
            </div>
            <div className="process3">
                <p className='number'>03.</p>
                <h2>Customized financial planning</h2>
                <p className='process-detail'>This step is crucial for compliance, decision-making, 
                    and maintaining a transparent view of the client's status.
                </p>
            </div>
            <div className="process4">
                <p className='number'>04.</p>
                <h2>Continuous monitoring and advisory services</h2>
                <p className='process-detail'>Financial landscapes evolve, and it's essential to provide ongoing support. 
                    Regularly monitor financial activities and goals.
                </p>
            </div>

        </div>
    </div>
)
}
export default EasySteps;