import { Menu } from "./menu"

export const Layout: React.FC = () =>{

    return(
        <div className="app">
            <section className="main-content columns is-fullheight">
                <Menu/>
                 <div className="container column is-10">
                    <div className="section">
                        <div className="card">
                            <div className="card-header">
                                <p className="card-header-title">
                                    Register
                                </p>
                            </div>
                            <div className="card-content">
                                content
                            </div>
                        </div>
                    </div>
                 </div>
            </section>
        </div>
    )
}