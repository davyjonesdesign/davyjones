<script>
import TextLink from '@/components/TextLink.vue';
import DownloadIcon from "@/components/icons/IconDownload.vue";

export default {
    components: {
        TextLink,
        DownloadIcon
    },
    data() {
        return {
            TextLink,
            DownloadIcon
        }
    }
  }
</script>

<template>
  <div class="page-wrap">
    <h2 class="page-header">Resume</h2>
    <div class="page-textlink">
      <text-link 
      url="/files/JonesDavy_SrUIDesigner_2024.pdf"
      download 
      :show-icon="true"
      :icon="DownloadIcon" :text="'Download Resume'"></text-link>
    </div>
    <div class="resume-page">
      <div class="resume-left">
        <!-- experience -->
        <div class="resume-section experience">
          <h3>Work Experience</h3>

          <div class="work-experience">
            <h5>Wheels</h5>

            <div class="exp-roles">
              <div class="exp-role">
                <h4>Senior UI Designer</h4>
                <h6>Apr 2024 - PRESENT</h6>
              </div>

              <div class="exp-role">
                <h4>UX/UI Designer Architect II</h4>
                <h6>Aug 2020 - Apr 2024</h6>
              </div>
            </div>
          </div>

          <div class="work-experience">
            <h5>Purdue University</h5>

            <div class="exp-roles">
              <div class="exp-role">
                <h4>Design Consultant</h4>
                <h6>Feb 2020 – Apr 2020</h6>
              </div>
            </div>
          </div>

          <div class="work-experience">
            <h5>Central Wire</h5>

            <div class="exp-roles">
              <div class="exp-role">
                <h4>UX/UI/Web & Graphic Designer</h4>
                <h6>Apr 2019 – Mar 2020</h6>
              </div>
            </div>
          </div>

          <div class="work-experience">
            <h5>Palko Services</h5>

            <div class="exp-roles">
              <div class="exp-role">
                <h4>Visual Designer</h4>
                <h6>Nov 2018 – Apr 2018</h6>
              </div>
            </div>
          </div>

          <div class="work-experience">
            <h5>Liberty Biible</h5>

            <div class="exp-roles">
              <div class="exp-role">
                <h4>Graphic & Web Designer</h4>
                <h6>Jun 2018 – Nov 2018</h6>
              </div>
            </div>
          </div>

          <div class="work-experience">
            <h5>Oliver Gospel Mission</h5>

            <div class="exp-roles">
              <div class="exp-role">
                <h4>Web & Graphic Designer</h4>
                <h6>Oct 2017 – Jun 2018</h6>
              </div>
            </div>
          </div>
          <div class="work-experience">
            <h5>Financial Eagle</h5>

            <div class="exp-roles">
              <div class="exp-role">
                <h4>Web & Graphic Designer</h4>
                <h6>Jun 2016 – Aug 2018</h6>
              </div>
            </div>
          </div>
        </div>

        <!-- education -->
        <div class="resume-section education">
          <h3>Education History</h3>

          <div class="ed-entry">
            <h4>Master of Arts Graphic and Web Design</h4>
            <h5>Minneapolis College Art and Design</h5>
            <h6>Jan 2020 - Aug 2023</h6>
          </div>

          <div class="ed-entry">
            <h4>Bachelor of Science Communications</h4>
            <h5>Columbia International University</h5>
            <h6>Aug 2012 - May 2016</h6>
          </div>
        </div>
      </div>

      <!-- skills -->
      <div class="resume-section resume-right skills">
        <h3>Skills</h3>

        <h4>Design / UX</h4>
        <h5>UI/UX design</h5>
        <h5>Wireframing</h5>
        <h5>Prototyping</h5>
        <h5>User flows / journeys</h5>
        <h5>Usability testing</h5>
        <h5>Design systems</h5>
        <h5>Data visualization</h5>
        <h5>Web Typography</h5>
        <h5>Illustration</h5>
        <h5>Motion graphics/ Animation</h5>
        <h4>Creative Tools</h4>
        <h5>Figma</h5>
        <h5>Sketch</h5>
        <h5>
          Adobe Creative Suite (Photoshop, Illustrator, InDesign, After Effects)
        </h5>
        <h4>Collaboration</h4>
        <h5>Jira</h5>
        <h5>Agile methodology</h5>
        <h5>Zeplin</h5>
        <h5>GitHub</h5>
        <h5>Cross-functional collaboration</h5>
        <h4>Additional Skills</h4>
        <h5>Problem-solving</h5>
        <h5>Communication</h5>
        <h5>Presentation</h5>
      </div>
    </div>
  </div>
</template>
