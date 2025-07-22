import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

export default function RocketGrowthSection() {
  const sectionRef = useRef(null);
  const [hoveredStage, setHoveredStage] = useState<number | null>(null);
  const [isCurrentHovered, setIsCurrentHovered] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'end center']
  });

  const rocketY = useTransform(scrollYProgress, [0, 1], ['100%', '-10%']);
  const rocketRotate = useTransform(scrollYProgress, [0, 1], [0, 15]);

  const stages = [
    {
      level: 1,
      title: '기술 성장',
      description: '기본적인 기술 스킬 습득과 디자인 도구 마스터',
      longDescription: '창의적 표현을 위한 기초 기술 습득부터 시작하여 디자인의 기본기를 다졌습니다.',
      position: { x: 10, y: 80 },
      color: 'bg-red-500',
      glowColor: 'shadow-red-500/50',
      skills: ['HTML/CSS', 'Adobe Creative Suite', 'Typography'],
      achievement: '디자인 도구 숙련도 95%'
    },
    {
      level: 2,
      title: '문제 해결',
      description: '디자인 문제를 기술적 접근으로 해결하는 능력 개발',
      longDescription: '단순한 시각적 해결책을 넘어 사용자의 실제 문제를 파악하고 해결하는 역량을 키웠습니다.',
      position: { x: 25, y: 65 },
      color: 'bg-orange-500',
      glowColor: 'shadow-orange-500/50',
      skills: ['UI/UX 설계', '사용자 리서치', 'Problem Solving'],
      achievement: '사용자 만족도 85% 향상'
    },
    {
      level: 3,
      title: '팀워크',
      description: '효과적인 협업과 리더십을 통한 팀 성과 극대화',
      longDescription: '개인의 역량을 팀의 시너지로 발전시키며, 디자인 시스템을 통해 협업 효율성을 높였습니다.',
      position: { x: 40, y: 50 },
      color: 'bg-custom-yellow',
      glowColor: 'shadow-yellow-500/50',
      skills: ['팀 리딩', '디자인 시스템', 'Cross-functional'],
      achievement: '팀 생산성 60% 증가'
    },
    {
      level: 4,
      title: '자동화',
      description: '반복 작업의 기술적 자동화로 생산성 혁신',
      longDescription: '수작업의 한계를 뛰어넘어 기술을 활용한 자동화 솔루션으로 워크플로우를 혁신했습니다.',
      position: { x: 55, y: 35 },
      color: 'bg-green-500',
      glowColor: 'shadow-green-500/50',
      skills: ['Figma Plugin', 'JavaScript', 'API Integration'],
      achievement: '작업 시간 80% 단축'
    },
    {
      level: 5,
      title: 'AI/데이터 활용',
      description: 'AI와 데이터 기반 의사결정으로 스마트한 디자인',
      longDescription: '머신러닝과 데이터 분석을 디자인 프로세스에 통합하여 더 정확한 인사이트를 도출합니다.',
      position: { x: 70, y: 20 },
      color: 'bg-blue-500',
      glowColor: 'shadow-blue-500/50',
      skills: ['Python', 'Machine Learning', 'Data Visualization'],
      achievement: '예측 정확도 92% 달성'
    },
    {
      level: 6,
      title: '시스템 설계',
      description: '확장 가능한 시스템 아키텍처와 통합적 사고',
      longDescription: '복잡한 시스템을 체계적으로 설계하고 지속가능한 솔루션을 구축하는 역량을 완성했습니다.',
      position: { x: 85, y: 5 },
      color: 'bg-purple-500',
      glowColor: 'shadow-purple-500/50',
      skills: ['React', 'System Architecture', 'Scalability'],
      achievement: '현재 진행 중인 혁신'
    }
  ];

  return (
    <section ref={sectionRef} className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 bg-gradient-to-b from-blue-50 via-white to-purple-50 overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl"></div>
      </div>

      {/* Frame: Rocket Header */}
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-pretendard-bold text-custom-black mb-6">
            Growth Trajectory
          </h2>
          <p className="text-xl font-pretendard-regular font-normal text-custom-gray max-w-2xl mx-auto">
            기술 레벨업의 상승 곡선을 따라가는 여정
          </p>
        </motion.div>

        {/* Frame: Growth Chart Container */}
        <div className="relative h-[600px] md:h-[700px]">
          {/* Enhanced Background Grid */}
          <motion.svg 
            className="absolute inset-0 w-full h-full opacity-20" 
            viewBox="0 0 100 100" 
            preserveAspectRatio="none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.2 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#A0AEC0" strokeWidth="0.5"/>
              </pattern>
              <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A0AEC0" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#FFCA28" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </motion.svg>

          {/* Enhanced Growth Curve Path */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFCA28"/>
                <stop offset="50%" stopColor="#A0AEC0"/>
                <stop offset="100%" stopColor="#000000"/>
              </linearGradient>
            </defs>
            <motion.path
              d="M 5 95 Q 20 80, 35 65 T 65 35 T 95 5"
              fill="none"
              stroke="url(#pathGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              filter="drop-shadow(0 0 8px rgba(255, 202, 40, 0.3))"
            />
            
            {/* Animated Path Dot using animateMotion */}
            <motion.circle
              r="2"
              fill="#FFCA28"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              viewport={{ once: true }}
            >
              <animateMotion
                dur="8s"
                repeatCount="indefinite"
                path="M 5 95 Q 20 80, 35 65 T 65 35 T 95 5"
              />
              <animate 
                attributeName="r" 
                values="2;4;2" 
                dur="2s" 
                repeatCount="indefinite"
              />
            </motion.circle>
          </svg>

          {/* Frame: Enhanced Stage Markers */}
          {stages.map((stage, index) => {
            const isHovered = hoveredStage === stage.level;
            
            return (
              <motion.div
                key={stage.level}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                viewport={{ once: true }}
                className="absolute group cursor-pointer"
                style={{
                  left: `${stage.position.x}%`,
                  top: `${stage.position.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                onHoverStart={() => setHoveredStage(stage.level)}
                onHoverEnd={() => setHoveredStage(null)}
              >
                {/* Enhanced Stage Node */}
                <motion.div 
                  className={`w-16 h-16 ${stage.color} rounded-full flex items-center justify-center shadow-lg ${stage.glowColor} relative z-10 overflow-hidden`}
                  whileHover={{ 
                    scale: 1.2,
                    transition: { duration: 0.3 }
                  }}
                  animate={{
                    boxShadow: isHovered 
                      ? `0 20px 40px ${stage.color.includes('custom-yellow') ? '#FFCA28' : stage.color.replace('bg-', '')}40, 0 0 0 4px ${stage.color.includes('custom-yellow') ? '#FFCA28' : stage.color.replace('bg-', '')}20`
                      : `0 10px 20px ${stage.color.includes('custom-yellow') ? '#FFCA28' : stage.color.replace('bg-', '')}20`
                  }}
                >
                  <motion.span 
                    className="text-white font-pretendard-bold text-lg z-20 relative"
                    animate={{
                      scale: isHovered ? 1.1 : 1,
                      rotate: isHovered ? [0, -5, 5, 0] : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {stage.level}
                  </motion.span>

                  {/* Ripple Effect */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0.8 }}
                        animate={{ scale: 3, opacity: 0 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className={`absolute inset-0 ${stage.color} rounded-full`}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Enhanced Energy Burst Effect */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ 
                    scale: [0, 2, 1.5], 
                    opacity: [0, 0.8, 0],
                    rotate: [0, 180]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    delay: 1.3 + index * 0.2,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                  className={`absolute inset-0 ${stage.color} rounded-full`}
                />

                {/* Orbit Effect for Hovered Stage */}
                <AnimatePresence>
                  {isHovered && (
                    <>
                      {[1, 2, 3].map((orbit) => (
                        <motion.div
                          key={orbit}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ 
                            scale: 1 + orbit * 0.5, 
                            opacity: 0.3 - orbit * 0.1,
                            rotate: 360
                          }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ 
                            scale: { duration: 0.3 },
                            rotate: { duration: 3 + orbit, repeat: Infinity, ease: "linear" }
                          }}
                          className={`absolute inset-0 border border-current rounded-full`}
                          style={{
                            borderColor: stage.color.includes('custom-yellow') ? '#FFCA28' : stage.color.replace('bg-', ''),
                            width: `${100 + orbit * 30}%`,
                            height: `${100 + orbit * 30}%`,
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)'
                          }}
                        />
                      ))}
                    </>
                  )}
                </AnimatePresence>

                {/* Enhanced Hover Card */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: 20 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="absolute bottom-full mb-6 left-1/2 transform -translate-x-1/2 z-30"
                      style={{ width: 'max-content', maxWidth: '350px' }}
                    >
                      <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-white/20 relative">
                        {/* Arrow */}
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white/95 rotate-45 border-r border-b border-white/20"></div>
                        
                        <div className="relative z-10">
                          <div className="flex items-center gap-3 mb-4">
                            <div className={`w-8 h-8 ${stage.color} rounded-full flex items-center justify-center text-white font-pretendard-bold text-sm`}>
                              {stage.level}
                            </div>
                            <h4 className="font-pretendard-bold text-xl text-custom-black">
                              {stage.title}
                            </h4>
                          </div>
                          
                          <p className="font-pretendard-medium text-sm text-custom-gray mb-3 leading-relaxed">
                            {stage.description}
                          </p>
                          
                          <div className="border-t border-gray-200 pt-4 mb-4">
                            <p className="font-pretendard-medium text-xs text-custom-gray/80 mb-3">
                              {stage.longDescription}
                            </p>
                            
                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-3 rounded-lg mb-3">
                              <p className="font-pretendard-bold text-xs text-custom-black mb-1">성과</p>
                              <p className="font-pretendard-medium text-xs text-custom-gray">
                                {stage.achievement}
                              </p>
                            </div>
                            
                            <div className="flex flex-wrap gap-2">
                              {stage.skills.map((skill, skillIndex) => (
                                <motion.span
                                  key={skill}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: skillIndex * 0.1 }}
                                  className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-50 text-xs rounded-full text-custom-black font-pretendard-medium border border-gray-200"
                                >
                                  {skill}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}

          {/* Frame: Enhanced Animated Rocket */}
          <motion.div
            className="absolute w-20 h-20 z-30"
            style={{
              left: useTransform(scrollYProgress, [0, 1], ['5%', '80%']),
              top: rocketY,
              rotate: rocketRotate
            }}
          >
            <div className="relative">
              <motion.div 
                className="text-5xl filter drop-shadow-lg"
                animate={{
                  scale: [1, 1.1, 1],
                  filter: [
                    'drop-shadow(0 0 0px rgba(255, 202, 40, 0))',
                    'drop-shadow(0 0 20px rgba(255, 202, 40, 0.8))',
                    'drop-shadow(0 0 0px rgba(255, 202, 40, 0))'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🚀
              </motion.div>
              
              {/* Enhanced Rocket Trail */}
              <motion.div
                className="absolute top-full left-1/2 transform -translate-x-1/2 origin-top"
                animate={{
                  scaleY: [0.8, 1.2, 0.8],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
              >
                <div className="w-2 h-12 bg-gradient-to-b from-orange-400 via-red-500 to-transparent rounded-full"></div>
              </motion.div>

              {/* Particle Trail */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-custom-yellow rounded-full"
                  style={{
                    left: '50%',
                    top: '100%',
                    transform: 'translateX(-50%)'
                  }}
                  animate={{
                    y: [0, 20 + i * 10],
                    opacity: [1, 0],
                    scale: [1, 0.5]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeOut"
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Frame: Enhanced Final Achievement */}
          <AnimatePresence>
          {!isCurrentHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 1, delay: 2.5 }}
              viewport={{ once: true }}
              className="absolute top-8 right-8 z-20"
              onHoverStart={() => setIsCurrentHovered(true)}
              onHoverEnd={() => setIsCurrentHovered(false)}
            >
              <motion.div
                className="bg-gradient-to-br from-white via-yellow-50 to-purple-50 p-8 rounded-3xl shadow-2xl border-2 border-custom-yellow max-w-sm relative overflow-hidden"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-custom-yellow/10 to-purple-500/10 rounded-3xl"></div>
                
                <div className="relative z-10">
                  <motion.div 
                    className="text-4xl mb-4 text-center"
                    animate={{
                      rotate: [0, -10, 10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    🎯
                  </motion.div>
                  <h3 className="font-pretendard-bold text-xl text-custom-black mb-3 text-center">
                    지금의 나
                  </h3>
                  <p className="font-pretendard-medium text-sm text-custom-gray text-center leading-relaxed">
                    시스템과 제품을 설계하는 디자이너로서 기술과 디자인의 경계를 넘나들며 혁신을 만들어가고 있습니다.
                  </p>
                  
                  <div className="mt-4 flex justify-center">
                    <div className="px-4 py-2 bg-gradient-to-r from-custom-yellow to-yellow-400 text-custom-black text-xs font-pretendard-bold rounded-full">
                      계속 성장 중...
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
          </AnimatePresence>

          {/* Progress Indicator */}
          <motion.div
            className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg z-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <span className="text-sm font-pretendard-medium text-custom-gray">진행도</span>
              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-custom-yellow to-custom-black rounded-full"
                  style={{ width: useTransform(scrollYProgress, [0, 1], ['0%', '100%']) }}
                />
              </div>
              <motion.span 
                className="text-sm font-pretendard-bold text-custom-black"
                style={{ 
                  opacity: useTransform(scrollYProgress, [0, 1], [0.5, 1])
                }}
              >
                {useTransform(scrollYProgress, [0, 1], [0, 100]).get().toFixed(0)}%
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 