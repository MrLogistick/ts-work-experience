import { createFileRoute } from "@tanstack/react-router";
import {
  SkillDescription,
  SkillNode,
  SkillPath,
  SkillTree,
  SkillTreeContent,
} from "../components/skill-tree";
import { Title } from "../components/title";

export const Route = createFileRoute("/skills")({
  component: Skills,
});

function Skills() {
  return (
    <div className="h-full flex flex-col overflow-hidden">
      <span className="shrink-0">
        <Title>Skill Tree</Title>
      </span>
      <div className="min-h-0 grow">
        <SkillTree>
          <SkillTreeContent>
            <SkillPath pathName="Game Development" columns={2}>
              <SkillNode icon="⚛️" name="React" />
              <SkillNode icon="🎨" name="CSS" />
            </SkillPath>
            <SkillPath pathName="Web Development" columns={2}>
              <SkillNode icon="🟢" name="Node.js" />
              <SkillNode icon="🐘" name="PostgreSQL" />
            </SkillPath>
            <SkillPath pathName="Data Manipulation" columns={2}>
              <SkillNode icon="🐍" name="Python" />
              <SkillNode icon="📊" name="Pandas" />
            </SkillPath>
          </SkillTreeContent>
          <SkillDescription
            title="Skill Description"
            description="This is a simple skill description."
          />
        </SkillTree>
      </div>
    </div>
  );
}
