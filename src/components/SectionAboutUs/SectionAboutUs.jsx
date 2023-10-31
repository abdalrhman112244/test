import { Container, Row } from "react-bootstrap"

const SectionAboutUs = () => {
  return (
    <section id="AboutUs">
        <h1>ABOUT US</h1>
        <Container>
            <Row>
                <div className="col-md-6 ">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto error quasi, illum deserunt quibusdam praesentium eligendi exercitationem laboriosam similique? Cupiditate deleniti libero molestiae, ipsa consequuntur temporibus unde repellat asperiores reprehenderit.</p>
                    <p><i class="fa-solid fa-check-double"></i>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <p><i class="fa-solid fa-check-double"></i>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <p><i class="fa-solid fa-check-double"></i>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
            </Row>
        </Container>
    </section>
  )
}

export default SectionAboutUs